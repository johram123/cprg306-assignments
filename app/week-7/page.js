"use client";

import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="flex flex-col items-center bg-gray-950">
      <h1 className="text-5xl font-bold m-7">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
