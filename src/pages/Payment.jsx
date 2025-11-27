import { useParams, useNavigate } from "react-router-dom";
import Wrapper from "../components/wrapper.jsx";
import { getTickets, saveTickets } from "../store.jsx";

export default function Payment() {
  const { id: ref } = useParams(); // URL gives /payment/:ref
  const navigate = useNavigate();
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  const booking = bookings.find((b) => b.ref === ref);

  const pay = () => {
    const updated = bookings.map((b) =>
      b.ref === booking.ref ? { ...b, paid: true } : b
    );

    localStorage.setItem("bookings", JSON.stringify(updated));

    navigate(`/ticket-receipt/${booking.ref}`);
  };

  const cancelBooking = () => {
    if (!window.confirm("Do you want to continue deleting the booking?"))
      return;

    const updatedBookings = bookings.filter((b) => b.ref !== booking.ref);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    const tickets = getTickets();
    const ticket = tickets.find((t) => t.id === booking.ticketId);
    if (ticket) ticket.seatsAvailable += booking.seats;

    saveTickets(tickets);

    navigate("/");
  };

  if (!booking) {
    return (
      <Wrapper>
        <p className="text-red-600">Booking not found.</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 className="text-xl font-bold mb-4">Payment</h2>

      <p>
        Total: <strong>{Number(booking.price).toLocaleString()} RWF</strong>
      </p>

      <div className="mt-6 flex gap-4">
        <button
          className="bg-green-600 text-white px-14 py-2 rounded-xl"
          onClick={pay}
        >
          Pay
        </button>

        <button
          onClick={cancelBooking}
          className="bg-stone-200 text-black px-4 py-2 rounded-xl"
        >
          Cancel Booking
        </button>
      </div>
    </Wrapper>
  );
}
