import { useState } from "react";
import { setUser, saveProfile } from "../store.jsx";
import { BusBg, Logo } from "../assets/index.js";

export const inputStyle = `border-2 border-stone-200 focus:border-main-color outline-none rounded-2xl px-3 py-2.5 w-full flex items-center justify-center gap-2`;
export const buttonStyle = `bg-main-color hover:bg-main-color-dark text-white select-none text-base font-semibold p-3 w-full flex items-center justify-center gap-2 rounded-2xl`;
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
    <div className="w-full min-h-svh grid grid-cols-2 max-lg:grid-cols-1">
      <div className="flex items-center justify-center flex-col w-full py-20 px-7 col-span-2">
        <div className=" flex items-center justify-center flex-col gap-2">
          <h1 className="font-extrabold text-3xl text-main-color">OBTBS</h1>
          <p className="text-black/70 text-[12px]">
            Online Bus Ticket Booking system
          </p>
        </div>
        <div className="w-full max-w-[400px] flex-1 max-h-[800px] max-lg:max-h-fit flex flex-col items-center justify-center gap-1">
          <h2 className="text-2xl font-medium">Welcome Back</h2>
          <p className="text-black/70 text-sm">
            Please enter select your role to continue
          </p>
          <div className="w-full h-fit bg-stone-200/60 p-1 rounded-2xl mt-5">
            <div className="w-full flex select-none items-center justify-start gap-1 relative">
              {/* indicator */}
              <div
                className={`w-1/2 h-full bg-white absolute top-0 left-0 transition-all duration-200 rounded-xl ease-in-out ${
                  role === "passenger" ? "translate-x-0" : "translate-x-full"
                }`}
              ></div>

              {/* Passenger */}
              <div
                onClick={() => setRole("passenger")}
                className={`w-full h-fit p-2.5 z-10 rounded-xl cursor-pointer flex items-center justify-center transition-all ${
                  role === "passenger"
                    ? "text-main-color font-semibold"
                    : "text-black/70"
                }`}
              >
                PASSENGER
              </div>

              {/* Agency */}
              <div
                onClick={() => setRole("agency")}
                className={`w-full h-fit p-2.5 z-10 rounded-xl cursor-pointer flex items-center justify-center transition-all ${
                  role === "agency"
                    ? "text-main-color font-semibold"
                    : "text-black/70"
                }`}
              >
                AGENCY
              </div>
            </div>
          </div>

          {role === "passenger" && (
            <div className="w-full">
              <p className="text-base text-black/70 mt-4 mb-3">Username</p>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="eg. John123"
                className={inputStyle}
              />
            </div>
          )}

          {role === "agency" && (
            <div className="w-full bg-stone-200 mt-5">
              <div className="bg-white w-full p-4 rounded-2xl">{}</div>
            </div>
          )}

          <button onClick={go} className={`${buttonStyle} mt-5`}>
            Continue as guest
          </button>
        </div>
        <div className=""></div>
      </div>
      {/* <div className="flex items-center justify-center w-full max-h-svh max-lg:hidden select-none bg-main-color">
        <img
          src={
            "https://thumbs.dreamstime.com/b/bus-parked-side-road-sunset-modern-its-headlights-driving-343593898.jpg"
          }
          alt=""
          className="w-full h-full object-cover object-right-bottom"
        />
      </div> */}
    </div>
  );
}
