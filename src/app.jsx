import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth.jsx";
import Login from "./pages/login.jsx";
import Passenger from "./pages/passenger.jsx";
import Agency from "./pages/agency.jsx";
import Profile from "./pages/profile.jsx";
import PassengerTicketView from "./pages/PassengerTicketView.jsx";
import Payment from "./pages/Payment.jsx";
import TicketReceipt from "./pages/TicketReceipt.jsx";
import PassengerBookings from "./pages/PassengerBookings.jsx";
import AgencyReports from "./pages/AgencyReports.jsx";

export default function App() {
  const u = useAuth();
  if (!u.loggedIn) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />

      {/* passenger pages */}
      {u.role === "passenger" && (
        <>
          <Route path="/" element={<Passenger />} />
          <Route path="/ticket/:id" element={<PassengerTicketView />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/ticket-receipt/:ref" element={<TicketReceipt />} />
          <Route path="/my-bookings" element={<PassengerBookings />} />
          {/* not found page */}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}

      {/* agency pages */}
      {u.role === "agency" && (
        <>
          <Route path="/" element={<Agency />} />
          <Route path="/reports" element={<AgencyReports />} />
          {/* not found page */}
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}
