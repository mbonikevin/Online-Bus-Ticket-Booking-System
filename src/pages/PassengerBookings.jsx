import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../components/wrapper";

export default function PassengerBookings() {
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h2 className="text-xl font-medium mb-4">My Bookings</h2>

      <ul className="flex flex-col gap-3">
        {bookings.map((b) => (
          <li
            key={b.ref}
            className="border border-stone-200 bg-stone-50 rounded-xl text-sm text-black/60 p-4 flex flex-col gap-1 "
          >
            <div className="font-semibold text-black">
              {b.from} <span className="text-black/50">to</span> {b.to}
            </div>

            <div>Seats: {b.seats}</div>
            <div>
              Total:{" "}
              <span className="text-black">
                {Number(b.price).toLocaleString()} RWF
              </span>
            </div>

            <div className="">
              Status:{" "}
              {b.paid ? (
                <span className="text-green-600 font-medium">Paid ✔</span>
              ) : (
                <span className="text-red-500 font-medium">Not Paid ✖</span>
              )}
            </div>

            {!b.paid ? (
              <button
                onClick={() => navigate(`/payment/${b.ref}`)}
                className="py-2 px-4 w-fit mt-3 max-md:w-full self-end text-center max-md:mt-4 bg-blue-500 text-white rounded-xl"
              >
                Pay or Cancel
              </button>
            ) : (
              <Link
                to={`/ticket-receipt/${b.ref}`}
                className="py-2 px-4 w-fit mt-3 max-md:w-full self-end text-center max-md:mt-4 bg-blue-500 text-white rounded-xl"
              >
                View Receipt
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
