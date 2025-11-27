import { useParams } from "react-router-dom";
import Wrapper from "../components/wrapper";
import jsPDF from "jspdf";

export default function TicketReceipt() {
  const { ref } = useParams();
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  const booking = bookings.find((b) => b.ref === ref);

  const downloadTicket = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Digital Ticket", 20, 20);

    doc.setFontSize(12);
    doc.text(`Reference: ${booking.ref}`, 20, 40);
    doc.text(`From: ${booking.from}`, 20, 50);
    doc.text(`To: ${booking.to}`, 20, 60);
    doc.text(`Seats: ${booking.seats}`, 20, 70);
    doc.text(`Time: ${booking.time}`, 20, 80);
    doc.text(`Total Paid: ${Number(booking.price).toLocaleString()} RWF`, 20, 90);

    doc.save(`Ticket-${booking.ref}.pdf`);
  };

  return (
    <Wrapper>
      <h2 className="text-xl font-medium mb-4">Your Digital Ticket 🎟️</h2>

      <div className="border p-4 bg-white rounded-xl shadow">
        <p><strong>Reference:</strong> {booking.ref}</p>
        <p><strong>From:</strong> {booking.from}</p>
        <p><strong>To:</strong> {booking.to}</p>
        <p><strong>Seats:</strong> {booking.seats}</p>
        <p><strong>Time:</strong> {booking.time}</p>
        <p><strong>Total Paid:</strong> {Number(booking.price).toLocaleString()} RWF</p>
      </div>

      <div className="w-full flex gap-3">
        <a
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-xl"
          href={`mailto:${booking.email}?subject=Your Ticket ${booking.ref}&body=Here is your ticket information:%0ARef: ${booking.ref}%0AFrom: ${booking.from}%0ATo: ${booking.to}%0ASeats: ${booking.seats}%0APaid: $${booking.price}`}
        >
          Send to Email
        </a>

        <button
          className="mt-6 inline-block bg-stone-200 text-black px-4 py-2 rounded-xl"
          onClick={downloadTicket}
        >
          Download
        </button>
      </div>
    </Wrapper>
  );
}
