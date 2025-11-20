import { getProfile, saveProfile } from "../store.jsx";
import { useState } from "react";
import { useAuth } from "../auth.jsx";
import Wrapper from "../components/Wrapper.jsx";
import { buttonStyle, inputStyle } from "./login.jsx";

export default function Profile() {
  const { role } = useAuth();
  const p = getProfile();

  const [username, setUsername] = useState(p?.username || "");
  const [agencyName, setAgencyName] = useState(p?.agencyName || "");
  const [branchName, setBranchName] = useState(p?.branchName || "");

  const save = () => {
    if (role === "passenger") {
      saveProfile({ username });
    } else {
      saveProfile({ agencyName, branchName });
    }
    alert("saved");
  };

  return (
    <Wrapper>
      <h2 className="text-xl font-medium">
        {role === "agency" ? "Agency " : "Passenger "}
        Profile
      </h2>

      {role === "passenger" && (
        <div>
          <p className="mt-5 mb-2">UserName</p>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            className={`${inputStyle}`}
          />
        </div>
      )}

      {role === "agency" && (
        <div>
          <div>
            <p className="mt-5 mb-2">Agency Name</p>
            <input
              value={agencyName}
              onChange={(e) => setAgencyName(e.target.value)}
              placeholder="agency name"
              className={`${inputStyle}`}
            />
          </div>
          <div>
            <p className="mt-5 mb-2">Agency Branch</p>
            <input
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              placeholder="branch name"
              className={`${inputStyle}`}
            />
          </div>
        </div>
      )}

      <button
        onClick={save}
        className={`mt-6 ${buttonStyle} max-w-[200px] max-sm:max-w-full`}
      >
        Save Changes
      </button>
    </Wrapper>
  );
}
