"use client";

import ProductCard from "@/components/client/Cards/ProductCard/ProductCard";
import Title from "@/components/client/Title/Title";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <section className="section-bg py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="text-secondary mb-4">
                Best Furniture For Your Castle....
              </h3>
              <h1 className="mb-4 text-4xl md:text-6xl font-bold">
                New Furniture Collection Trends in 2023
              </h1>
              <p className="mb-4 sub-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, totam veniam! Ad animi harum suscipit eveniet magni
                expedita modi adipisci?
              </p>
              <Button type="button" className="btn btn-primary">
                Shop Now
              </Button>
            </div>
            <div>
              <Image
                src="/images/sofa-promotional-header.png"
                alt="hero banner image"
                width={800}
                height={800}
                className="mx-auto"
                draggable={false}
              />
            </div>
          </div>
        </Container>
      </section>
      {/* Featured Section */}
      <section className="py-10">
        <Container>
          <Title title="Featured Products" />
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <ProductCard
                title="Cantilever Chair"
                code="Y523201"
                price="42.00"
                imgUrl="/images/white-chair.png"
              />
              <ProductCard
                title="Cantilever Chair"
                code="Y523201"
                price="42.00"
                imgUrl="/images/white-chair.png"
              />
              <ProductCard
                title="Cantilever Chair"
                code="Y523201"
                price="42.00"
                imgUrl="/images/white-chair.png"
              />
              <ProductCard
                title="Cantilever Chair"
                code="Y523201"
                price="42.00"
                imgUrl="/images/white-chair.png"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
