"use client";

import Item from "./item.js";
import { useState, useEffect } from "react";


export default function ItemList({items}) {
    // State to track the sorting criterion
    const [sortCriterion, setSortCriterion] = useState(null);

    // Initialize state variables
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        if (sortCriterion) {
            const sorted = sortItems(sortCriterion);
            setSortedItems(sorted);
        } else {
            setSortedItems(items);
        }
    }, [items, sortCriterion]);



    // Sorts the items by name or category
    const sortItems = (sortBy) => {
        // Sort without modifying the original array
        return [...items].sort((a, b) => {
            if (sortBy === "name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "category") {
                return a.category.localeCompare(b.category);
            }
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8">
            <div className="flex space-x-4 mb-8">
                <button onClick={() => setSortCriterion("name")} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Sort By Name
                </button>
                <button onClick={() => setSortCriterion("category")} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Sort By Category
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-4">
                {sortedItems.map((item,index) => (
                    <Item
                        key={index} // assuming items does not include a unique 'id' for each item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </div>
        </div>
    );
}


