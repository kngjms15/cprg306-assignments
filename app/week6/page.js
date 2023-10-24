"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import React, { useState } from "react";
import itemsData from "./items.json";

export default function Week6() {
    //initialize state for items with data from items.json
    const [items, setItems] = useState(itemsData);

    //Event handler to add enw item to the list
    const onAddItem = (newItem) => {
        setItems([...items, newItem]);
    };


    return ( 
        <main className="bg-slate-600">
            <h1 className="flex flex-col items-center p-8 text-3xl font-bold text-gray-300">Week 6</h1>
            <h2 className="flex flex-col items-center p-8 text-2xl text-gray-300">My Shopping List</h2>

            {/* Pass the onAddItem function to the NewItem component */}
            <NewItem onAddItem={onAddItem} />
            {/* Pass the items state variable to the ItemList component */}
            <ItemList items={items} />

        </main>
    );
}