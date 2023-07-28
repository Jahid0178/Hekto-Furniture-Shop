"use client";

import React from "react";
import Container from "@/components/common/Container";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/admin/api/add-product", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const UpdateProductPage = async () => {
  const res = await getProducts();
  let { products } = res;
  return (
    <section>
      <Container>
        <h2>Update Product</h2>
        {products?.map((product: any) => (
          <div key={product._id}>
            <h2>{product.productName}</h2>
            <p>{product.category}</p>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default UpdateProductPage;
