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
          <div>
            <button
              value = "name" onClick={() => setSortBy("name")}
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
              >
              Sort By Name
            </button>

            <button
              value = "category" onClick={() => setSortBy("category")}
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
              >
              Sort By Category
            </button>
          </div>
        </div>
    );
}
