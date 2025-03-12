"use client";

import { useState } from "react";

export function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    const id = Math.floor(Math.random() * 10000).toString(36); // generate an id
    let newItem = { id, ...item };
    onAddItem(newItem);

    setQuantity(1);
    setCategory("Produce");
    setName("");
  };

  return (
    <div className="flex items-center h-52">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 h-44 justify-evenly items-center bg-neutral-800 rounded-md p-4"
      >
        <div name="item" className="w-full">
          <input
            type="text"
            placeholder="Item Name"
            required
            value={name}
            className="p-1 block w-full rounded-md h-9 text-black bg-gray-100 focus:bg-white"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex w-full justify-between">
          <div name="category" className="w-1/2 pr-2">
            <select
              value={category}
              className="rounded-md h-9 text-black w-full"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div
            name="quantity"
            className="flex w-1/2 rounded-md h-9 bg-slate-200 items-center"
          >
            <button
              type="button"
              onClick={decrement}
              className="bg-neutral-600 rounded-md w-6 h-6 ml-3 text-black"
            >
              -
            </button>
            <p className="flex-1 text-center text-black">{quantity}</p>
            <button
              type="button"
              onClick={increment}
              className="bg-blue-500 rounded-md w-6 h-6 mr-3 text-black"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 p-1 block rounded-md text-black focus:bg-white"
        >
          +
        </button>
      </form>
    </div>
  );
}
