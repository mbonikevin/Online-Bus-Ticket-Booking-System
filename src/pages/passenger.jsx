import { useState } from "react";
import { getPassengerProfile, getTickets } from "../store.jsx";
import Wrapper from "../components/wrapper.jsx";
import { Link } from "react-router-dom";

export default function Passenger() {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    time: "",
  });
  const [filteredTickets, setFilteredTickets] = useState(getTickets());

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const user = getPassengerProfile();

  const handleSearch = () => {
    const { from, to, time } = searchParams;
    const tickets = getTickets();

    const filtered = tickets.filter((ticket) => {
      const matchesFrom =
        !from || ticket.from.toLowerCase().includes(from.toLowerCase());
      const matchesTo =
        !to || ticket.to.toLowerCase().includes(to.toLowerCase());
      const matchesTime = !time || ticket.time.includes(time);

      return matchesFrom && matchesTo && matchesTime;
    });

    setFilteredTickets(filtered);
  };

  return (
    <Wrapper>
      <h2 className="text-xl font-medium">Hello, {user.username} 👋</h2>

      <h3 className="text-black/70 mt-1 mb-4">
        Available Tickets ({filteredTickets.length})
      </h3>

      {/* Search Form */}
      <div className="mb-4 flex max-md:grid max-md:grid-cols-2 gap-4">
        <input
          name="from"
          placeholder="From"
          value={searchParams.from}
          onChange={handleSearchChange}
          className="p-2 border rounded-xl w-full"
        />
        <input
          name="to"
          placeholder="To"
          value={searchParams.to}
          onChange={handleSearchChange}
          className="p-2 border rounded-xl w-full"
        />
        <input
          name="time"
          placeholder="Time"
          value={searchParams.time}
          onChange={handleSearchChange}
          className="p-2 border rounded-xl w-full"
        />
        <button
          onClick={handleSearch}
          className="py-2 px-4 bg-blue-500 text-white rounded-xl"
        >
          Search
        </button>
      </div>

      {/* Tickets List */}
      <ul className="flex flex-col gap-3">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="border border-stone-200 bg-stone-50 rounded-xl p-4 flex flex-col gap-1 text-black/80"
          >
            <div className="font-semibold">
              {ticket.from} <span className="text-black/50">to</span>{" "}
              {ticket.to}
            </div>
            <div className="text-sm text-black/60">at {ticket.time}</div>
            <div className="text-sm text-black/60">
              Seats Available: {ticket.seatsAvailable}
            </div>

            {ticket.seatsAvailable > 0 ? (
              <Link
                className="py-2 px-4 w-fit max-md:w-full self-end text-center max-md:mt-4 bg-blue-500 text-white rounded-xl"
                to={`/ticket/${ticket.id}`}
              >
                Reserve Seats
              </Link>
            ) : (
              <button onClick={() => alert("All Seats Reserved, at the moment")} className="py-2 px-4 w-fit max-md:w-full self-end text-center max-md:mt-4 bg-blue-500 text-white rounded-xl">
                Reserve Seats
              </button>
            )}
          </div>
        ))}
      </ul>
    </Wrapper>
  );
}
