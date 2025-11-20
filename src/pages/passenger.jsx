import { Link } from "react-router-dom";
import { logout, getTickets, getProfile } from "../store.jsx";
import Wrapper from "../components/Wrapper.jsx";

export default function Passenger({ refresh }) {
  const t = getTickets();
  const p = getProfile();

  return (
    <Wrapper>
      <h2 className="text-xl font-medium">Hello, {p.username} 👋</h2>

      <h3 className="text-black/70 mt-1 mb-4">Available Tickets:</h3>

      <ul className="flex flex-col gap-3">
        {t.map((x) => (
          <li
            key={x.id}
            className="border border-stone-200 bg-stone-50 rounded-xl p-4 text-black/80"
          >
            <div className="font-semibold">
              {x.from} <span className="text-black/50">to</span> {x.to}
            </div>
            <div className="text-sm text-black/60 mt-1">at {x.time}</div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
