"use client";

import React from "react";
import Image from "next/image";
import { cartTableItemProps } from "@/libs/types/types";

const CartTableItem = ({
  data: { id, imgSrc, product_name, price, quantity, total },
}: cartTableItemProps) => {
  return (
    <tr>
      <td className="p-2 border text-primary">{id}</td>
      <td className="p-2 border text-primary flex items-center gap-2">
        <span>
          <Image src={imgSrc} alt={product_name} width={60} height={60} />
        </span>
        <span>{product_name}</span>
      </td>
      <td className="p-2 border text-primary">$ {price}</td>
      <td className="p-2 border text-primary">{quantity} Pcs</td>
      <td className="p-2 border text-primary">$ {total}</td>
    </tr>
  );
};

export default CartTableItem;
