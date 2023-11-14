"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {
            "name": name,
            "quantity": quantity,
            "category": category,
        };  

        console.log(item);
        alert(`Added ${quantity} ${name} to ${category}`);

        setName("");
        setQuantity("1");
        setCategory("Produce");
        
    };

    const nameChange = (event) => {
        setName(event.target.value);
    };

    const quantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const categoryChange = (event) => {
        setCategory(event.target.value);
    };


    return (
        <main className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <div className="w-full mx-auto px-4">
                <div className="flex justify-between items-center mb-6 pr-20">
                    <Link href="/">
                        <span className="inline-block text-sm bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                            Home
                        </span>
                    </Link>
                    <h1 className="text-4xl font-bold text-blue-800 text-center flex-1">Week 4: Add New Item</h1>
                </div>
                <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="text-2xl text-center text-gray-800 font-bold mb-4">
                            Add New Item
                        </div>
                        <div>
                            <label className="block text-gray-800">Name:</label>
                            <input
                                required
                                type="text"
                                value={name}
                                onChange={nameChange}
                                placeholder="Enter item name"
                                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-800">Quantity:</label>
                            <input
                                required
                                type="number"
                                min="1"
                                max="99"
                                value={quantity}
                                onChange={quantityChange}
                                placeholder="Enter quantity"
                                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-800">Category:</label>
                            <select
                                value={category}
                                onChange={categoryChange}
                                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
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
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
                        >
                            Add Item
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}



