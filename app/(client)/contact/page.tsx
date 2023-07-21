"use client";

import Heading from "@/components/client/Heading/Heading";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <PageHeading title="Contact" />
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-2">
              <Heading
                title="Information About Us"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque distinctio sint eveniet quibusdam aliquam reiciendis totam. Asperiores harum numquam in dolor. Distinctio quia quasi, itaque totam repellat numquam, dolorum sed odit nemo recusandae temporibus vel, eum neque asperiores incidunt qui."
              />
            </div>
            <div className="p-2">
              <Heading title="Contact Way" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-1 flex items-center gap-2">
                  <span>1</span>
                  <span>
                    <Link href="tel:877678899" className="sub-text">
                      Tel: 877-67-88-99
                    </Link>
                    <br />
                    <Link href="#" className="sub-text">
                      zahidul.haque767@gmail.com
                    </Link>
                  </span>
                </div>
                <div className="p-1 flex items-center gap-2">
                  <span>1</span>
                  <span>
                    <p className="sub-text">Support fourm for over 24hr</p>
                  </span>
                </div>
                <div className="p-1 flex items-center gap-2">
                  <span>1</span>
                  <span>
                    <p className="sub-text">
                      20 Margaret st, London, Great britain, 3NM98-LK
                    </p>
                  </span>
                </div>
                <div className="p-1 flex items-center gap-2">
                  <span>1</span>
                  <span>
                    <p className="sub-text">
                      Free standart shipping on all orders
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="p-2">
              <Heading
                title="Get In Touch"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                praesentium vitae commodi veniam cumque incidunt ipsum
                laboriosam nam voluptas enim?"
              />
            </div>
            <div className="p-2">
              <Image
                src="/images/contact-us/contact-us.png"
                alt="Contact Us"
                width={450}
                height={380}
                className="w-auto h-auto"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
