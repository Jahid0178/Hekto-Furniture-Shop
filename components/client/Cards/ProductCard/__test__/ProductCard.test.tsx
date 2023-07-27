import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../ProductCard";

test("Start Product Card Testing", () => {
  render(
    <ProductCard
      title="Product Sofa"
      id="132"
      code="FK-120"
      price="150"
      imgUrl="/image/apple-watch.png"
    />
  );
});
