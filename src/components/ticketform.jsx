import { useState, useEffect } from "react";
import { buttonStyle, inputStyle } from "../pages/login";

export default function TicketForm({ onAdd, onUpdate, editing }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");

  // Load ticket when editing
  useEffect(() => {
    if (editing) {
      setFrom(editing.from);
      setTo(editing.to);
      setTime(editing.time);
    }
  }, [editing]);

  const save = () => {
    if (!from || !to || !time) return;

    if (editing) {
      onUpdate({ id: editing.id, from, to, time });
    } else {
      onAdd({ id: Date.now().toString(), from, to, time });
    }

    setFrom("");
    setTo("");
    setTime("");
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-4 my-4">
        <input
          placeholder="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
          className={`${inputStyle}`}
        />
        <input
          placeholder="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
          className={`${inputStyle}`}
        />
        <input
          placeholder="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className={`${inputStyle}`}
        />
        <button
        onClick={save}
        className={`${buttonStyle} `}
      >
        {editing ? "update ticket" : "Create ticket"}
      </button>
      </div>

      
    </div>
  );
}
