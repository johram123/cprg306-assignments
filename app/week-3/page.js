import { ItemList } from "./item-list.js";

export default function Page() {
    return (
        <main className="flex flex-col items-start bg-gray-950">
            <h1 className="text-5xl font-bold m-7">Shopping List</h1>
            <ItemList />
        </main>
    );
}