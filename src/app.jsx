import { useState } from "react"
import { useAuth } from "./auth.jsx"
import Login from "./pages/login.jsx"
import Passenger from "./pages/passenger.jsx"
import Agency from "./pages/ agency.jsx"


export default function App() {
  const [v, setV] = useState(0)
  const a = useAuth()

  if (!a.loggedIn) return <Login refresh={() => setV(v + 1)} />

  if (a.role === "passenger") return <Passenger refresh={() => setV(v + 1)} />
  if (a.role === "agency") return <Agency refresh={() => setV(v + 1)} />

  return null
}
