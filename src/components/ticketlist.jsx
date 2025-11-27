export default function TicketList({ list, onDelete, onEdit }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {list.map((x) => (
        <li
          key={x.id}
          className="border border-stone-200 bg-stone-50 rounded-xl p-4 text-black/80 flex justify-between max-md:flex-col gap-5"
        >
          <div>
            <div className="font-semibold">
              {x.from} <span className="text-black/50">to</span> {x.to}
            </div>
            <div className="text-sm text-black/60">at {x.time}</div>
            <div className="text-sm text-black/60">
              Seats Available: {x.seatsAvailable}
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => onEdit(x)} className="bg-amber-500 text-white px-2 py-1.5 rounded-xl">
              Edit
            </button>

            <button onClick={() => onDelete(x.id)} className="bg-red-500 text-white px-2 py-1.5 rounded-xl">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
