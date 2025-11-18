import { logout, getTickets, saveTickets } from "../store.jsx"
import { useState } from "react"
import TicketForm from "../components/ticketform.jsx"
import TicketList from "../components/ticketlist.jsx"

export default function Agency({ refresh }) {
  const [tickets, setTickets] = useState(getTickets())

  const add = t => {
    const n = [...tickets, t]
    setTickets(n)
    saveTickets(n)
  }

  const remove = id => {
    const n = tickets.filter(x => x.id !== id)
    setTickets(n)
    saveTickets(n)
  }

  return (
    <div>
      <h2>agency</h2>
      <button onClick={() => { logout(); refresh() }}>logout</button>
      <TicketForm onAdd={add} />
      <TicketList list={tickets} onDelete={remove} />
    </div>
  )
}
