export default function TicketList({ list, onDelete }) {
  return (
    <ul>
      {list.map(x => (
        <li key={x.id}>
          {x.from} to {x.to} at {x.time}
          <button onClick={() => onDelete(x.id)}>delete</button>
        </li>
      ))}
    </ul>
  )
}
