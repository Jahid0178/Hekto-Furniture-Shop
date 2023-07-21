"use client";

import ProductCard from "@/components/client/Cards/ProductCard/ProductCard";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { latestProducts, offersDatas } from "@/data/data";
import OfferCard from "@/components/client/Cards/OfferCard/OfferCard";
import BlogCard from "@/components/client/Cards/BlogCard/BlogCard";
import Heading from "@/components/client/Heading/Heading";
import WideCard from "@/components/client/Cards/WideCard/WideCard";
import NewsLaterSignup from "@/components/common/Banners/NewsLater/NewsLaterSignup";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
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
          <Heading title="Featured Products" className={"text-center"} />
          <div className="mt-8">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <SwiperSlide key={item}>
                  <ProductCard
                    title="Cantilever Chair"
                    code="Y523201"
                    price="42.00"
                    imgUrl="/images/white-chair.png"
                    id={item}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
      {/* Latest Proudct Section */}
      <section className="py-10">
        <Container>
          <Heading title="Latest Products" className={"text-center"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestProducts.map((latestProduct) => (
              <WideCard key={latestProduct.id} data={latestProduct} />
            ))}
          </div>
        </Container>
      </section>
      {/* Offer Section */}
      <section className="py-10">
        <Container>
          <Heading title="What Shopex Offer!" className={"text-center"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offersDatas.map((offer) => (
              <OfferCard key={offer.id} data={offer} />
            ))}
          </div>
        </Container>
      </section>
      {/* Trending Product Section */}
      <section className="py-10">
        <Container>
          <Heading title="Trending Products" className={"text-center"} />
        </Container>
      </section>
      {/* News Later Section */}
      <section className="py-0">
        <NewsLaterSignup title="Get Leatest Update By Subscribe Our Newslater" />
      </section>
      {/* Latest Blog Section */}
      <section className="py-10">
        <Container>
          <Heading title="Latest Blog" className={"text-center"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <BlogCard key={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
