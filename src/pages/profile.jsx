import { getProfile, saveProfile } from "../store.jsx"
import { useState } from "react"
import { useAuth } from "../auth.jsx"

export default function Profile() {
  const { role } = useAuth()
  const p = getProfile()

  const [username, setUsername] = useState(p?.username || "")
  const [agencyName, setAgencyName] = useState(p?.agencyName || "")
  const [branchName, setBranchName] = useState(p?.branchName || "")

  const save = () => {
    if (role === "passenger") {
      saveProfile({ username })
    } else {
      saveProfile({ agencyName, branchName })
    }
    alert("saved")
  }

  return (
    <div>
      <h2>profile</h2>

      {role === "passenger" && (
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </div>
      )}

      {role === "agency" && (
        <div>
          <input
            value={agencyName}
            onChange={(e) => setAgencyName(e.target.value)}
            placeholder="agency name"
          />
          <input
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            placeholder="branch name"
          />
        </div>
      )}

      <button onClick={save}>save</button>
    </div>
  )
}
