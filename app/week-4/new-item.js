"use client";

import { useState } from "react";

export function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex flex-col w-40 h-20 "> 
            <p className="text-xl font-bold flex-1 mx-auto">Quantity: {quantity}</p>
            <div className="flex justify-evenly flex-1">
                <button onClick={increment} className="bg-green-300 rounded-md w-12 text-black" >+</button>
                <button onClick={decrement} className="bg-red-300 rounded-md w-12 text-black">-</button>
            </div>
        </div>
    );
}