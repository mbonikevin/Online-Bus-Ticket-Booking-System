import { useState } from "react";
import { setUser, saveProfile } from "../store.jsx";

export default function Login() {
  const [role, setRole] = useState("passenger");
  const [username, setUsername] = useState("");

  const go = () => {
    if (role === "passenger") {
      if (!username) return alert("enter a username");

      setUser({ role: "passenger" });
      saveProfile({ username });
    }

    if (role === "agency") {
      setUser({ role: "agency" });

      saveProfile({
        agencyName: "DreamLine",
        branchName: "Main Branch",
      });
    }
    window.location.reload();
  };

  return (
    <div>
      <h2>login</h2>

      <label>
        role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="passenger">passenger</option>
          <option value="agency">agency</option>
        </select>
      </label>

      {role === "passenger" && (
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}

      <button onClick={go}>continue</button>
    </div>
  );
}
