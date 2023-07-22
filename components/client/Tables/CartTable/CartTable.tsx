"use client";

import { cartItems } from "@/data/data";
import Image from "next/image";
import React from "react";
import CartTableItem from "./CartTableItem";

const CartTable = () => {
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
          <th className="p-2 border text-left text-primary font-bold">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <CartTableItem data={cartItem} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
