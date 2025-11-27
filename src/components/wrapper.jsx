import { logout, getUser } from "../store.jsx";
import { NavLink } from "react-router-dom";

function Wrapper({ children }) {
  const u = getUser();

  const linkClass = ({ isActive }) =>
    `inline-block max-sm:text-sm hover:text-blue-600 ${
      isActive ? "text-blue-500" : ""
    }`;

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full min-h-svh max-w-[1000px] p-6 max-sm:p-4 ">
          <div className="flex items-center justify-between border-b pb-5">
            <h1 className="font-extrabold text-3xl text-main-color max-sm:text-xl">
              OBTBS
            </h1>

            <div className="w-fit flex items-center gap-5 max-sm:gap-3">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>

              {u?.role === "passenger" && (
                <NavLink to="/my-bookings" className={linkClass}>
                  My Bookings
                </NavLink>
              )}

              {u?.role === "agency" && (
                <NavLink to="/reports" className={linkClass}>
                  Reports
                </NavLink>
              )}

              <NavLink to="/profile" className={linkClass}>
                Profile
              </NavLink>

              <p className="text-black/30">|</p>

              <button
                onClick={logout}
                className="text-red-500 hover:text-red-600 font-medium max-sm:text-sm"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
