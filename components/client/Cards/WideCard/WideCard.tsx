"use client";

import React from "react";
import Image from "next/image";
import { BsCart3, BsHeart, BsZoomIn } from "react-icons/bs";

type WideCardProps = {
  data: {
    id: string;
    url: string;
    productName: string;
    price: number;
    description: string;
    quantity: string;
    createdAt: string;
    brand: string;
  };
};

const WideCard = ({ data }: WideCardProps) => {
  const { url, price, productName } = data;
  return (
    <div className="p-2 relative group shadow">
      <ul className="hidden absolute bottom-11 left-2 group-hover:inline-block">
        <li className="my-5 text-[#151875]">
          <BsCart3 cursor="pointer" size={20} />
        </li>
        <li className="my-5 text-[#151875]">
          <BsHeart cursor="pointer" size={20} />
        </li>
        <li className="my-5 text-[#151875]">
          <BsZoomIn cursor="pointer" size={20} />
        </li>
      </ul>
      <div className="bg-gray-100 hover:bg-white">
        <Image
          src={url}
          alt={productName}
          width={350}
          height={280}
          className="mx-auto"
        />
      </div>
      <div className="flex gap-2 justify-between items-center p-1">
        <h3 className="text-[#151875]">{productName}</h3>
        <span className="flex gap-2">
          <p className="text-[#151875]">${price}</p>
          <p className="text-secondary line-through">${price}</p>
        </span>
      </div>
    </div>
  );
};

export default WideCard;
