"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("Produce");

    
    const handleSubmit = (event) => {
        
        let item = {
            "name": name,
            "quantity": quantity,
            "category": category,
        };  

        event.preventDefault();
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
        <main>
        <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
            {(
            <div className="absolute top-0 mt-8 text-2xl ">
                Week 4
            </div>
            )}
            <div className="w-full max-w-md bg-purple-200 p-8 rounded-lg shadow-md">
            <h1 className="text-2xl text-gray-800 font-bold mb-8">
                Shopping List
            </h1>
            <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                <span className="text-gray-800" >Name:</span>
                <input
                    required
                    type="text"
                    onChange={nameChange}
                    placeholder = "Enter item name"
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
                </label>

                <label className="block mb-4">
                <span className="text-gray-800">Quantity:</span>
                <input
                    required
                    type="number"
                    onChange={quantityChange}
                    placeholder = "Enter quantity"
                    className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                />
                </label>

                <label className="block mb-4">
                <span className="text-gray-800">Category:</span>
                <select className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white" required placeholder="Select Category" onChange={categoryChange}>
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
                Submit
                </button>
            </form>
            </div>
        </div>
        </main>
    )
}