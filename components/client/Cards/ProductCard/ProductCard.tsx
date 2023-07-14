"use client";

import { ProductCardProps } from "@/libs/types/types";
import Image from "next/image";

const ProductCard = ({ title, code, price, imgUrl }: ProductCardProps) => {
  return (
    <div className="text-center group">
      <Image src={imgUrl} alt="" width={180} height={180} className="mx-auto" />
      <div className="text-center mt-2 p-4 group-hover:bg-[#2F1AC4]">
        <h2 className="text-secondary text-lg md:text-2xl group-hover:text-white">
          {title}
        </h2>
        <p className="text-primary group-hover:text-white">Code - {code}</p>
        <p className="text-primary group-hover:text-white">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
