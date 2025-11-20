export function getUser() {
  const v = localStorage.getItem("user");
  return v ? JSON.parse(v) : null;
}

export function setUser(v) {
  localStorage.setItem("user", JSON.stringify(v));
}

export function logout() {
  localStorage.removeItem("user");
  window.location.href = "/";
}

export function getTickets() {
  const v = localStorage.getItem("tickets");
  if (!v) {
    const d = [
      { id: "1", from: "kigali", to: "muhanga", time: "09:00" },
      { id: "2", from: "kigali", to: "huye", time: "11:30" },
    ];
    localStorage.setItem("tickets", JSON.stringify(d));
    return d;
  }
  return JSON.parse(v);
}

export function saveTickets(t) {
  localStorage.setItem("tickets", JSON.stringify(t));
}

// export function getProfile() {
//   const v = localStorage.getItem("profile");
//   return v ? JSON.parse(v) : null;
// }

// export function saveProfile(p) {
//   localStorage.setItem("profile", JSON.stringify(p));
// }

export function getPassengerProfile() {
  const v = localStorage.getItem("profile_passenger");
  return v ? JSON.parse(v) : null;
}

export function savePassengerProfile(p) {
  localStorage.setItem("profile_passenger", JSON.stringify(p));
}

export function getAgencyProfile() {
  const v = localStorage.getItem("profile_agency");
  return v ? JSON.parse(v) : null;
}

export function saveAgencyProfile(p) {
  localStorage.setItem("profile_agency", JSON.stringify(p));
}
