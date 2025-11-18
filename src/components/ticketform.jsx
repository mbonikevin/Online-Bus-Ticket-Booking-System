import { useState } from "react"

export default function TicketForm({ onAdd }) {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [time, setTime] = useState("")

  const save = () => {
    if (!from || !to || !time) return
    onAdd({ id: Date.now().toString(), from, to, time })
    setFrom("")
    setTo("")
    setTime("")
  }

  return (
    <div>
      <input placeholder="from" value={from} onChange={e => setFrom(e.target.value)} />
      <input placeholder="to" value={to} onChange={e => setTo(e.target.value)} />
      <input placeholder="time" value={time} onChange={e => setTime(e.target.value)} />
      <button onClick={save}>add</button>
    </div>
  )
}
