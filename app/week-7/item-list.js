"use client";

import { Item } from "./item.js";
import { useState } from "react";

export function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortByCategory = (event) => {
    setSortBy(event.target.value);
  };

  const originalItems = [...items];
  const sortedItems = originalItems.sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

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

      {sortedItems.map((item) => (
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
