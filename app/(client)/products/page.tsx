"use client";

import React from "react";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { AiFillAppstore } from "react-icons/ai";
import { MdOutlineAlignHorizontalLeft } from "react-icons/md";
import ProductCard from "@/components/client/Cards/ProductCard/ProductCard";

const ProductsPage = () => {
  return (
    <>
      <PageHeading title="Products" />
      <section>
        <Container>
          <div className="flex flex-col items-start my-10  justify-between md:flex-row md:items-center md:my-20 gap-4">
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Furniture Products
              </h2>
              <p className="text-sm sub-text">
                About 9,620 results (0.62 seconds)
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <span>
                Sort By:
                <select
                  name=""
                  id=""
                  className="ml-2 p-1.5 outline-none sub-text"
                >
                  <option value="bm">Best Match</option>
                  <option value="htl">High To Low</option>
                  <option value="lth">Low To High</option>
                </select>
              </span>
              <span className="flex items-center gap-4">
                View: <AiFillAppstore />
                <MdOutlineAlignHorizontalLeft />
              </span>
            </div>
          </div>
          {/* Products Data Showing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <ProductCard
                key={item}
                title="Cantilever Chair"
                code="Y523201"
                price="42.00"
                imgUrl="/images/white-chair.png"
                id={item}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductsPage;
