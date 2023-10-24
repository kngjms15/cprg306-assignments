"use client";


import Item from "./item.js";
import { useState } from "react";



export default function ItemList({items}) {
    // Initialize state variables
    const [sortBy, setSortBy] = useState("name");


    //Sorts the items by name or category
    const sortedItems = items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);}
      else if (sortBy === "category") {
        return a.category.localeCompare(b.category);}
      });
    
    return (

      <div className="bg-slate-600 ">

        <div className="flex">
          <button 
            value = "name" 
            onClick={() => setSortBy("name")} 
            class="flex-1 text-center m-4 p-4 bg-blue-100 hover:bg-blue-500 rounded-lg">
            Sort By Name
          </button>

          <button 
          value = "category" 
          onClick={() => setSortBy("category")} 
          class="flex-1 text-center m-4 p-4 bg-blue-100 hover:bg-blue-500 rounded-lg">
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
