"use client";
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";


export default function ItemList({img, name, quantity,category}) {
    
    const [sortBy, setSortBy] = useState("name");
    
      if (sortBy === "name") {
        itemsData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === "category") {
        itemsData.sort((a, b) => a.category.localeCompare(b.category));
      }
    
    return (
        <div>
          <div class="flex m-8">
            <button 
              value = "name" onClick={() => setSortBy("name")}
              class="flex-1 text-center m-4 bg-blue-100 hover:bg-blue-500 p-6 rounded-lg"
              >
              Sort By Name
            </button>

            <button
              value = "category" onClick={() => setSortBy("category")}
              class="flex-1 text-center m-4 bg-blue-100 hover:bg-blue-500 p-6 rounded-lg"
              >
              Sort By Category
            </button>
          </div>
        </div>
    );
}
