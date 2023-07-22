"use client";

import OfferCard from "@/components/client/Cards/OfferCard/OfferCard";
import Heading from "@/components/client/Heading/Heading";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { offersDatas } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageHeading title="About" />
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div>
              <Image
                src="/images/about/about-banner.png"
                alt="about banner"
                width={650}
                height={580}
                className="mx-auto rounded-xl"
                style={{ boxShadow: "-13px 13px 0px -3px #2B3CAB" }}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl text-primary font-bold mb-4">
                Know About Our Ecomerce Business, History
              </h2>
              <p className="sub-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                maiores fuga earum, sed incidunt eos provident soluta optio at
                ratione odit? Repellat, quasi magni. Reiciendis ut quibusdam
                accusamus eum ducimus.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary inline-block mt-7"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Heading title="Our Features" className="text-center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {offersDatas.map((offer) => (
              <OfferCard key={offer.id} data={offer} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
