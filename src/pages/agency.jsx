import { logout, getTickets, saveTickets } from "../store.jsx";
import { useState } from "react";
import TicketForm from "../components/ticketform.jsx";
import TicketList from "../components/ticketlist.jsx";
import { Link } from "react-router-dom";

export default function Agency({ refresh }) {
  const [tickets, setTickets] = useState(getTickets());
  const [editing, setEditing] = useState(null); // {id, from, to, time} ot null

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
    <div>
      <h2>agency</h2>
      <button
        onClick={() => {
          logout();
          refresh();
        }}
      >
        logout
      </button>
      <Link to="/profile">profile</Link>

      <TicketForm onAdd={add} onUpdate={update} editing={editing} />
      <TicketList list={tickets} onDelete={remove} onEdit={setEditing} />
    </div>
  );
}
