import { Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./auth.jsx"

import Login from "./pages/login.jsx"
import Passenger from "./pages/passenger.jsx"
import Agency from "./pages/agency.jsx"
import Profile from "./pages/profile.jsx"

export default function App() {
  const u = useAuth()

  // i
  if (!u.loggedIn) {
    return <Login />
  }

  return (
    <Routes>

      {/* Profile page for both roles */}
      <Route path="/profile" element={<Profile />} />

      {/* Passenger routes */}
      {u.role === "passenger" && (
        <>
          <Route path="/" element={<Passenger />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}

      {/* Agency routes */}
      {u.role === "agency" && (
        <>
          <Route path="/" element={<Agency />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}

    </Routes>
  )
}
