import { useParams, useNavigate } from "react-router-dom";
import { getTickets, saveTickets } from "../store.jsx";
import { useState } from "react";
import Wrapper from "../components/wrapper.jsx";

export default function PassengerTicketView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tickets = getTickets();
  const ticket = tickets.find((t) => t.id === id);

  const [seats, setSeats] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const reserve = () => {
    if (seats > ticket.seatsAvailable) return alert("Not enough seats");

    ticket.seatsAvailable -= seats;
    saveTickets(tickets);

    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    const newBooking = {
      ref: "REF" + Date.now(),
      ticketId: ticket.id,
      from: ticket.from,
      to: ticket.to,
      seats,
      price: ticket.price * seats,
      time: ticket.time,
      email: "guest2025@gmail.com",
      paid: false,
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    navigate(`/payment/${newBooking.ref}`);
  };

  return (
    <Wrapper>
      <h2 className="text-xl font-semibold mb-2">
        {ticket.from} <span className="text-black/50 px-1">to</span> {ticket.to}
      </h2>

      <div>Time: {ticket.time}</div>
      <div>Price per seat: {Number(ticket.price).toLocaleString()} RWF</div>
      <div>Available seats: {ticket.seatsAvailable}</div>

      <div className="mt-3">How many seats do you want:</div>
      <input
        type="number"
        className="border p-2 mt-2 border-stone-200 rounded-xl"
        min="1"
        max={ticket.seatsAvailable}
        value={seats}
        onChange={(e) => setSeats(Number(e.target.value))}
      />

      <button
        className="py-2 px-4 w-fit block mt-4 max-md:w-full self-end text-center max-md:mt-4 bg-blue-500 text-white rounded-xl"
        onClick={reserve}
      >
        Reserve Seats
      </button>
    </Wrapper>
  );
}
