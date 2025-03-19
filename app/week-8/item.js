export function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="flex justify-start m-7 w-80 bg-gray-800 hover:bg-slate-400 cursor-pointer"
      onClick={onSelect}
    >
      <ul className="p-3">
        <li className="text-xl font-bold ">{name}</li>
        <li>
          Buy {quantity} in {category}
        </li>
      </ul>
    </div>
  );
}
