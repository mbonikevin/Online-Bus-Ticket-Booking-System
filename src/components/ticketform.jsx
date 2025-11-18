import { useState, useEffect } from "react";

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
    <div>
      <input
        placeholder="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        placeholder="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        placeholder="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={save}>{editing ? "update ticket" : "add ticket"}</button>
    </div>
  );
}
