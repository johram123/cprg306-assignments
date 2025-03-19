"use client";

import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import { MealIdeas } from "./meal-ideas.js";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (name) => {
    const cleanName = name.replace(
      /[\p{Emoji_Presentation}\p{Extended_Pictographic}]+|,.*/gu,
      ""
    );
    setSelectedItemName(cleanName);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="flex flex-row justify-between bg-gray-950">
      <div className="ml-4">
        <h1 className="text-5xl font-bold m-7 ">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="mr-auto ml-auto w-96">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
