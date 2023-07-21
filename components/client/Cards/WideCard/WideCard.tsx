import Image from "next/image";
import React from "react";

type WideCardProps = {
  data: {
    id: number;
    imgSrc: string;
    title: string;
    price: number;
    regularPrice: number;
  };
};

const WideCard = ({ data }: WideCardProps) => {
  const { id, imgSrc, title, price, regularPrice } = data;

  return (
    <div className="p-2">
      <div className="bg-gray-100 hover:bg-white">
        <Image
          src={imgSrc}
          alt={title}
          width={350}
          height={280}
          className="mx-auto"
        />
      </div>
      <div className="flex gap-2 justify-between items-center p-1">
        <h3>{title}</h3>
        <span className="flex gap-2">
          <span>${price}</span>
          <span>${regularPrice}</span>
        </span>
      </div>
    </div>
  );
};

export default WideCard;
