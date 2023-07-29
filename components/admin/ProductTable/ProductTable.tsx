"use client";

import React from "react";
import ProductTableItem from "./ProductTableItem";

const ProductTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="p-2 border text-left text-primary font-bold">ID</th>
          <th className="p-2 border text-left text-primary font-bold">
            Product
          </th>
          <th className="p-2 border text-left text-primary font-bold">Price</th>
          <th className="p-2 border text-left text-primary font-bold">
            Quantity
          </th>
          <th className="p-2 border text-left text-primary font-bold">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <ProductTableItem />
        <ProductTableItem />
        <ProductTableItem />
        <ProductTableItem />
        <ProductTableItem />
      </tbody>
    </table>
  );
};

export default ProductTable;
