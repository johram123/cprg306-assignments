"use client";

import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import { MealIdeas } from "./meal-ideas.js";
import itemsData from "./items.json";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context.js";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  const { firebaseSignOut } = useUserAuth();

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

  async function handleSignOut() {
    await firebaseSignOut();
  }

  return user ? (
    <main className="flex flex-row justify-between bg-gray-950">
      <div className="ml-4">
        <h1 className="text-5xl font-bold m-7 ">Shopping List</h1>
        <button onClick={handleSignOut} className="text-4xl hover:underline">
          Sign out
        </button>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="mr-auto ml-auto w-96">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  ) : (
    <div className="flex flex-col justify-center h-screen">
      <p className="text-4xl font-bold text-center">
        You need to be signed in to view this
        page!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </p>
    </div>
  );
}
