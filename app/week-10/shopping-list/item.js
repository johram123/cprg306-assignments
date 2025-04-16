export function Item({ name, quantity, category, onSelect, onDelete }) {
  return (
    <div
      className="flex justify-between m-7 w-80 bg-gray-800 hover:bg-slate-400 cursor-pointer"
      onClick={onSelect}
    >
      <ul className="p-3">
        <li className="text-xl font-bold ">{name}</li>
        <li>
          Buy {quantity} in {category}
        </li>
      </ul>

      <div className="flex-1 flex justify-end items-center m-3">
        <button
          onClick={(event) => {
            event.stopPropagation();
            onDelete();
          }}
          className="h-6 w-6 rounded-sm bg-red-400 hover:underline"
        >
          X
        </button>
      </div>
    </div>
  );
}
