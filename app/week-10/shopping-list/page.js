"use client";

import { ItemList } from "./item-list.js";
import { NewItem } from "./new-item.js";
import { MealIdeas } from "./meal-ideas.js";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context.js";
import {
  getItems,
  addItem,
  deleteItem,
} from "../_service/shopping-list-service.js";

export default function Page() {
  const [items, setItems] = useState([]);
  console.log("Items:", items);
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

  async function handleAddItem(item) {
    const id = await addItem(user.uid, item);
    const newItem = { id, ...item };
    console.log("New item added:", newItem);
    setItems((prevItems) => [...prevItems, newItem]);
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  async function handleDeleteItem(itemId) {
    await deleteItem(user.uid, itemId);
    console.log("Item deleted:", itemId);
    console.log("user uid:", user.uid);
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  return user ? (
    <main className="flex flex-row justify-between bg-gray-950">
      <div className="ml-4">
        <h1 className="text-5xl font-bold m-7 ">Shopping List</h1>
        <button onClick={handleSignOut} className="text-4xl hover:underline">
          Sign out
        </button>
        <NewItem onAddItem={handleAddItem} />
        <ItemList
          items={items}
          onItemSelect={handleItemSelect}
          onDeleteItem={handleDeleteItem}
        />
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
