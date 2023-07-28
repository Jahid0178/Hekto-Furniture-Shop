import React from "react";
import Container from "@/components/common/Container";
import Heading from "@/components/client/Heading/Heading";

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
  const data = res?.products;
  return (
    <section>
      <Container>
        <Heading title="Update Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.map((product: any) => (
            <div key={product._id} className="p-2 border rounded">
              <h2>{product.productName}</h2>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default UpdateProductPage;
