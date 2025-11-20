export default function TicketList({ list, onDelete, onEdit }) {
  return (
    <ul className="mt-6">
      {list.map(x => (
        <li key={x.id}>
          {x.from} to {x.to} at {x.time}

          <button onClick={() => onEdit(x)}>edit</button>
          <button onClick={() => onDelete(x.id)}>delete</button>
        </li>
      ))}
    </ul>
  )
}
