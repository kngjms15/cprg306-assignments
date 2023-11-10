"use client";


import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Week6() {

    //Initialize state with data from items.json
    const [items, setItems] = useState(itemsData);

    //Event handler for adding a new item
    const onAddItem = (newItem) => {
        setItems([...items, newItem]);
    }


    return (
        <main className="min-h-screen bg-gray-50 flex flex-col py-8">
            <div className="w-full px-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/">
                        <span className="inline-block text-sm bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                            Home
                        </span>
                    </Link>
                    <h1 className="text-4xl font-bold text-blue-800 my-6 text-center pr-20 flex-1">Week 6: Shopping List</h1>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                    <div className="mb-4">
                        <NewItem onAddItem={onAddItem} />
                    </div>
                    <div className="flex-grow">
                        <ItemList items={items}/>
                    </div>
                </div>
            </div>
        </main>
    );
}