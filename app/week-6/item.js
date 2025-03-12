
export function Item({name, quantity, category}) {
    return (
        <div className="flex justify-start m-7 mt-0 w-80 bg-gray-800">
            <ul className="p-3">
                <li className="text-xl font-bold ">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}