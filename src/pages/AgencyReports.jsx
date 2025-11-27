import Wrapper from "../components/wrapper";
import { getTickets } from "../store";

export default function AgencyReports() {
  const tickets = getTickets();
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  const sales = bookings.filter(b => b.paid);

  const totalRevenue = sales.reduce((a, b) => a + b.price, 0);

  return (
    <Wrapper>
      <h2 className="text-xl font-bold mb-4">Sales Report</h2>

      <p>Total Revenue: <span className="font-semibold">{Number(totalRevenue).toLocaleString()}RWF</span></p>
      <p>Total Tickets Sold: {sales.length}</p>

      <p className="mt-6">Sold Tickets:</p>
      <ul className="mt-2 flex flex-col gap-3">
        {sales.map(s => (
          <li key={s.ref} className="border p-3 rounded">
            {s.from} → {s.to}  
            <br />
            Seats: {s.seats}  
            <br />
            Earned: <span className="font-medium">{Number(s.price).toLocaleString()}RWF</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
