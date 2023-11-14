"use client";

import Link from "next/link";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas"; 
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";


export default function Week8() {
    // Initialize state variables with data from items.json
    const [items, setItems] = useState(itemsData);

    //new state variable to track the selected item name
    const [selectedItemName, setSelectedItemName] = useState("");

    //event handler for adding a new item
    const onAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    //event handler for selecting an item
    const handleItemSelect = (selectedItem) => {
        // Check if selectedItem and selectedItem.name are defined
        if (!selectedItem || !selectedItem.name) {
            console.error('Selected item or item name is undefined');
            return; // Exit the function if undefined
        }

        // Assuming the item object has a 'name' property
        let cleanedName = selectedItem.name;

        // Remove extra details after a comma, if any
        cleanedName = cleanedName.split(',')[0];

        // Remove emojis and extra characters
        cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');

        // Trim whitespace
        cleanedName = cleanedName.trim();

        setSelectedItemName(cleanedName);  
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col py-8">
            <div className="w-full px-4">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <span className="inline-block text-sm bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                            Home
                        </span>
                    </Link>
                    <h1 className="text-4xl font-bold text-blue-800 my-6 text-center pr-20 flex-1">Week 7: Meal Ideas</h1>
                </div>

                {/* Flex container for layout */}
                <div className="flex">
                    {/* Left side - Items and Add Item */}
                    <div className="flex-1">
                        <NewItem onAddItem={onAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>

                    {/* Right side - Meal Ideas */}
                    <div className="flex-1">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </main>
    );
}
