"use client";

import React from "react";
import { sidebarContents } from "@/data/data";

const ProductSidebar = () => {
  return (
    <aside>
      {sidebarContents.map((content, ind) => {
        return (
          <div key={ind} className="mb-4">
            <h2 className="text-lg text-primary mb-2 font-bold underline underline-offset-4">
              {content.title}
            </h2>
            <ul>
              {content.items.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <input type="checkbox" id={item.label} />
                  <label htmlFor={item.label} className="text-[#7E81A2]">
                    {item.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};

export default ProductSidebar;
