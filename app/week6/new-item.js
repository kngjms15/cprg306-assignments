"use client";

import { useState } from "react";


export default function NewItem({onAddItem}) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    
    const handleSubmit = (event) => {

        function generateID() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = '';
            for (let i = 0; i < 19; i++) {
              const randomIndex = Math.floor(Math.random() * chars.length);
              result += chars[randomIndex];
            }
            return result;
          }
        
        const newItem = {
            id: generateID(),
            name: name,
            quantity: quantity,
            category: category,
        };  

        // Call the onAddItem prop to add the dw item to the list in page.js
        onAddItem(newItem);// Pass the new item to the onAddItem function in page.js

        event.preventDefault();


        setName("");
        setQuantity(1);
        setCategory("Produce");
        
    };

    // Event handlers for the form inputs
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
        <main>
        <div className="bg-blue-gray-100 items-center justify-center">
            <div className="bg-slate-600 p-8 shadow-md">
            <h1 className="text-2xl text-gray-100 font-bold mb-4">
                Add New Item
            </h1>
            <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                <span className="text-gray-100" >Name:</span>
                <input
                    required
                    type="text"
                    onChange={nameChange}
                    value={name}
                    placeholder = "Enter item name"
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
                </label>

                <label className="block mb-4">
                <span className="text-gray-100">Quantity:</span>
                <input
                    required
                    type="number"
                    min="1"
                    max="100"
                    onChange={quantityChange}
                    value={quantity}
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
                </label>

                <label className="block mb-4">
                <span className="text-gray-100">Category:</span>
                <select className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" 
                required 
                placeholder="Select Category" 
                value={category}
                onChange={categoryChange}>
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
                </label>
                <button
                type="submit"
                className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
                >
                Add Item
                </button>


            </form>
            </div>
        </div>
        </main>
    )
}