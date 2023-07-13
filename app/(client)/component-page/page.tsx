"use client";

import PromoAds from "@/components/client/Cards/PromoAds/PromoAds";
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
          <h2 className="text-3xl">Promo Ads</h2>
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
      </div>
    </section>
  );
};

export default ComponentPage;
