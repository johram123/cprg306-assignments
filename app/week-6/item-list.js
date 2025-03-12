"use client";

import { Item } from "./item.js";
import { useState } from "react";
import itemsData from "./items.json";

export function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortByCategory = (event) => {
    setSortBy(event.target.value);
  };

  const items =
    sortBy === "name"
      ? itemsData.sort((a, b) => a.name.localeCompare(b.name))
      : itemsData.sort((a, b) => a.category.localeCompare(b.category));

  return (
    <div>
      <div className="flex justify-evenly">
        <button
          onClick={handleSortByName}
          value="name"
          className={`w-28 mb-4 ${
            sortBy === "name" ? "bg-orange-400" : "bg-orange-600"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          value="category"
          className={`w-28 mb-4 ${
            sortBy === "category" ? "bg-orange-400" : "bg-orange-600"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </div>
  );
}
