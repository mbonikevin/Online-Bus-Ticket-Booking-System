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
    const initialTickets = [
      {
        id: "1764238469302",
        from: "Kigali",
        to: "Muhanga",
        time: "09:00",
        seatsAvailable: 10,
        price: 2500,
      },
      {
        id: "1764233039791",
        from: "Kigali",
        to: "Huye",
        time: "11:30",
        seatsAvailable: 5,
        price: 3500,
      },
      {
        id: "1764233076430",
        from: "Muhanga",
        to: "Kigali",
        time: "14:00",
        seatsAvailable: 8,
        price: 2500,
      },
    ];

    localStorage.setItem("tickets", JSON.stringify(initialTickets));
    return initialTickets;
  }

  return JSON.parse(v);
}

export function saveTickets(t) {
  localStorage.setItem("tickets", JSON.stringify(t));
}

export function getBookings() {
  const v = localStorage.getItem("bookings");
  return v ? JSON.parse(v) : [];
}

export function saveBookings(list) {
  localStorage.setItem("bookings", JSON.stringify(list));
}

export function addBooking(b) {
  const list = getBookings();
  list.push(b);
  saveBookings(list);
}

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

export function getSalesReport() {
  const bookings = getBookings();
  const paid = bookings.filter((b) => b.paid);

  return {
    totalRevenue: paid.reduce((sum, b) => sum + b.price, 0),
    totalTicketsSold: paid.length,
    sales: paid,
  };
}
