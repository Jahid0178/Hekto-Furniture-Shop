"use client";

import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { BsCart3 } from "react-icons/bs";

const ProductDetailsPage = ({ params }: { params: any }) => {
  const { id } = params;
  return (
    <section>
      <PageHeading title="Product Details" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow mt-10">
          <div className="p-4">1</div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-primary">
              Playwood arm chair
            </h1>
            <div className="my-2">
              <h5 className="mb-2 text-primary text-lg">Description</h5>
              <p className="sub-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quibusdam asperiores?
              </p>
            </div>
            <Button
              type="button"
              className="btn btn-secondary flex gap-2 items-center"
              icon={<BsCart3 />}
            >
              Add To Cart
            </Button>
            <div className="mt-2">
              <p className="my-4 font-semibold text-primary">Categories: </p>
              <p className="my-4 font-semibold text-primary">Tags: </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetailsPage;
