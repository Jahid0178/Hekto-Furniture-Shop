"use client";

import ProductCard from "@/components/client/Cards/ProductCard/ProductCard";
import PromoAds from "@/components/client/Cards/PromoAds/PromoAds";
import Title from "@/components/client/Title/Title";
import Button from "@/components/common/Button/Button";
import React from "react";

const ComponentPage = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-4">
          <Title title="Buttons" />
          <Button type="button" className="btn btn-primary">
            Shop Now
          </Button>
          <Button type="button" className="btn btn-secondary">
            Add To Cart
          </Button>
        </div>
        <div className="mb-4">
          <Title title="Promo Ads" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PromoAds
              title="50% off in Apple Watch"
              src="/images/apple-watch.png"
              variant="promo-card-1"
            />
            <PromoAds
              title="20% off in Headphone"
              src="/images/headphone.png"
              variant="promo-card-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <Title title="Product Card" />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <ProductCard
              title="Cantilever Chair"
              code="Y523201"
              price="42.00"
              imgUrl="/images/white-chair.png"
              id=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentPage;
