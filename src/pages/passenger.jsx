import { Link } from "react-router-dom";
import { logout, getTickets } from "../store.jsx";

export default function Passenger({ refresh }) {
  const t = getTickets();

  return (
    <div>
      <h2>passenger</h2>
      <button
        onClick={() => {
          logout();
          refresh();
        }}
      >
        logout
      </button>
      <Link to="/profile">profile</Link>
      <ul>
        {t.map((x) => (
          <li key={x.id}>
            {x.from} to {x.to} at {x.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
