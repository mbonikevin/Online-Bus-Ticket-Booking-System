import { useState } from "react"
import { setUser } from "../store.jsx"

export default function Login({ refresh }) {
  const [role, setRole] = useState("passenger")
  const go = () => {
    setUser({ role })
    refresh()
  }

  return (
    <div>
      <h2>login</h2>
      <label>
        role
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="passenger">passenger</option>
          <option value="agency">agency</option>
        </select>
      </label>
      <button onClick={go}>continue as guest</button>
      {/* <button onClick={() => refresh()}>Guest</button> */}
    </div>
  )
}
