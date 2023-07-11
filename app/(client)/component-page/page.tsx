"use client";

import Button from "@/components/common/Button/Button";
import React from "react";

const ComponentPage = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">Buttons</h1>
      <Button type="button" className="btn btn-primary">
        Shop Now
      </Button>
      <Button type="button" className="btn btn-secondary">
        Add To Cart
      </Button>
    </div>
  );
};

export default ComponentPage;
