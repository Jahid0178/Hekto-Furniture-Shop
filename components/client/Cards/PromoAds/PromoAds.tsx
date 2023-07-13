"use client";

import { PromoAdsProps } from "@/libs/types/types";
import Image from "next/image";
import Link from "next/link";

const PromoAds = ({ title, src, variant }: PromoAdsProps) => {
  return (
    <div className={`promo-card ${variant}`}>
      <div className="flex gap-4 items-center">
        <div className="text-white">
          <h2 className="text-4xl font-bold">{title}</h2>
          <Link href="#" className="mt-4 inline-block underline">
            Shop Now
          </Link>
        </div>
        <div className="text-white">
          <Image src={src} alt={title} width={250} height={250} />
        </div>
      </div>
    </div>
  );
};

export default PromoAds;
