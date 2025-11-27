import { useState, useEffect } from "react";
import { buttonStyle, inputStyle } from "../pages/login";

export default function TicketForm({ onAdd, onUpdate, editing }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editing) {
      setFrom(editing.from);
      setTo(editing.to);
      setTime(editing.time);
      setSeats(editing.seatsAvailable);
      setPrice(editing.price);
    }
  }, [editing]);

  const save = () => {
    if (!from || !to || !time || !seats) return;

    const ticket = {
      id: editing ? editing.id : Date.now().toString(),
      from,
      to,
      time,
      seatsAvailable: Number(seats),
      price: Number(price),
    };

    editing ? onUpdate(ticket) : onAdd(ticket);

    setFrom("");
    setTo("");
    setTime("");
    setSeats("");
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 my-4">
        <input
          placeholder="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className={inputStyle}
        />

        <input
          placeholder="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className={inputStyle}
        />

        <input
          placeholder="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={inputStyle}
        />

        <input
          placeholder="seats available"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          className={inputStyle}
          type="number"
        />

        <input
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={inputStyle}
          type="number"
        />

        <button onClick={save} className={buttonStyle}>
          {editing ? "Update ticket" : "Create ticket"}
        </button>
      </div>
    </div>
  );
}
