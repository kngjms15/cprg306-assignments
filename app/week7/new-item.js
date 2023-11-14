"use client";

import { useState } from "react";
import Link from "next/link";

//added onAddItem as a prop
export default function NewItem({onAddItem}) {
    

    // Initialize state variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    //handleSubmit function
    const handleSubmit = (event) => {
        event.preventDefault();

        function generateID() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < 19; i++) {
              const randomIndex = Math.floor(Math.random() * chars.length);
              result += chars[randomIndex];
            }
            return result;
          }

        let newItem = {
            "id": generateID(),
            "name": name,
            "quantity": quantity,
            "category": category,
        };  

        //call the onAddItem function passed in as a prop
        onAddItem(newItem);

        // console.log(item);
        alert(`Added ${quantity} ${name} to ${category}`);
        
        //resets the form
        setName("");
        setQuantity("1");
        setCategory("Produce");
        
    };

    //event handlers for the form inputs
    const idChange = (event) => {
        setId(event.target.value);
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
        <main className="bg-gray-50 flex flex-col items-center py-8">
            <div className="w-full mx-auto px-4">
                <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="text-2xl text-center text-gray-800 font-bold mb-4">
                            Add new item
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