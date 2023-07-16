"use client";

import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";

const ProductDetailsPage = ({ params }: { params: any }) => {
  const { id } = params;
  return (
    <section>
      <PageHeading title="Product Details" />
      <Container>
        <h2>Product Details Number: {id}</h2>
      </Container>
    </section>
  );
};

export default ProductDetailsPage;
