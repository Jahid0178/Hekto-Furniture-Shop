"use client";

import PromoCard from "@/components/client/Cards/PromoCard/PromoCard";
import Button from "@/components/common/Button/Button";
import React from "react";

const ComponentPage = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-4">
          <h2 className="text-3xl">Buttons</h2>
          <Button type="button" className="btn btn-primary">
            Shop Now
          </Button>
          <Button type="button" className="btn btn-secondary">
            Add To Cart
          </Button>
        </div>
        <div>
          <h2 className="text-3xl">Promo Cards</h2>
          <PromoCard />
        </div>
      </div>
    </section>
  );
};

export default ComponentPage;
