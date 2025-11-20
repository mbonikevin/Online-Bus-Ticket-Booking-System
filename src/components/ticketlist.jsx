export default function TicketList({ list, onDelete, onEdit }) {
  return (
    <ul className="mt-6 flex flex-col gap-3">
      {list.map((x) => (
        <li
          key={x.id}
          className="border border-stone-200 bg-stone-50 rounded-xl p-4 text-black/80 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-5"
        >
          <div className="flex flex-col">
            <div className="font-semibold">
              {x.from}
              <span className="text-black/50"> to </span>
              {x.to}
            </div>
            <div className="text-sm text-black/60 mt-1">at {x.time}</div>
          </div>
          <div className="flex items- gap-2 max-sm:w-full">
            <button
              onClick={() => onEdit(x)}
              className={`bg-amber-500 text-white select-none text-base font-semibold px-2 py-1.5 min-w-[70px] max-sm:w-full flex items-center justify-center gap-2 rounded-xl`}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(x.id)}
              className={`bg-red-500 text-white select-none text-base font-semibold px-2 py-1.5 min-w-[70px] max-sm:w-full flex items-center justify-center gap-2 rounded-xl`}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
