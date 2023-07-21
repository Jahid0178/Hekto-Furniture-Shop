"use client";

import React from "react";
import { sidebarContents } from "@/data/data";

const ProductSidebar = () => {
  return (
    <aside>
      {sidebarContents.map((content, ind) => {
        return (
          <div key={ind} className="mb-4">
            <h2 className="text-lg text-primary mb-2">{content.title}</h2>
            {content.items.map((item) => (
              <span key={item.id} className="flex items-center gap-2">
                <input type="checkbox" id={item.label} />
                <label htmlFor={item.label}>{item.label}</label>
              </span>
            ))}
          </div>
        );
      })}
    </aside>
  );
};

export default ProductSidebar;
