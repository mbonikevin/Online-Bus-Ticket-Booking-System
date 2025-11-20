import { logout, getTickets, saveTickets, getAgencyProfile } from "../store.jsx";
import { useState } from "react";
import TicketForm from "../components/ticketform.jsx";
import TicketList from "../components/ticketlist.jsx";
import { Link } from "react-router-dom";
import Wrapper from "../components/wrapper.jsx";

export default function Agency({ refresh }) {
  const [tickets, setTickets] = useState(getTickets());
  const [editing, setEditing] = useState(null); // {id, from, to, time} ot null
  const p = getAgencyProfile()

  const add = (t) => {
    const n = [...tickets, t];
    setTickets(n);
    saveTickets(n);
  };

  const update = (t) => {
    const n = tickets.map((x) => (x.id === t.id ? t : x));
    setTickets(n);
    saveTickets(n);
    setEditing(null);
  };

  const remove = (id) => {
    const n = tickets.filter((x) => x.id !== id);
    setTickets(n);
    saveTickets(n);
  };

  return (
    <Wrapper>
      <h2>Agency</h2>
      <h1 className="text-2xl font-semibold">{p?.agencyName}</h1>

      <h2 className="mt-6">Create A ticket</h2>
      <TicketForm onAdd={add} onUpdate={update} editing={editing} />
      <TicketList list={tickets} onDelete={remove} onEdit={setEditing} />
    </Wrapper>
  );
}
