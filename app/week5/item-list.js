"use client";
import Item from "./item.js";
import { useState } from "react";
import itemsData from "./items.json";


export default function ItemList({name, quantity,category}) {
    // Initialize state variables
    const [sortBy, setSortBy] = useState("name");

    //Sorts the items by name or category
    const sortedItems = itemsData.sort((a, b) => {if (sortBy === "name") {
        return a.name.localeCompare(b.name);}
      else if (sortBy === "category") {
        return a.category.localeCompare(b.category);}
      });
    
    return (
        <div class="bg-slate-600 ">
          <div class="flex m-8 ">
            <button value = "name" onClick={() => setSortBy("name")} class="flex-1 text-center m-4 bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">
              Sort By Name
            </button>

            <button value = "category" onClick={() => setSortBy("category")} class="flex-1 text-center m-4 bg-blue-100 hover:bg-blue-500 p-6 rounded-lg">
              Sort By Category
            </button>

          </div>
            <ul>
              {sortedItems.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
        </div>
    );
}
