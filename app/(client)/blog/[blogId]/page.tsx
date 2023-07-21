"use client";

import React from "react";
import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";

const BlogDetailsPage = ({
  params: { blogId },
}: {
  params: { blogId: any };
}) => {
  return (
    <>
      <PageHeading title="Single Blog" />
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(900px,_1fr)_400px] gap-4">
            <div className="shadow rounded-lg">
              <Image
                src="/images/blog/blog-1.png"
                alt="Blog Image"
                width={550}
                height={380}
                className="w-full rounded-lg"
              />
              <div className="p-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <FaPenNib color={"#FB2E86"} /> Saber Ali
                  </span>
                  <span className="flex items-center gap-2">
                    <BsCalendar3 color={"#FFA454"} /> 21 August, 2023
                  </span>
                </div>
                <h2 className="py-4 text-2xl font-bold text-primary hover:text-secondary">
                  Top essential Trends in 2023 {blogId}
                </h2>
                <p className="text-[#72718F]">
                  More off this less hello samlande lied much over tightly circa
                  horse taped mightly
                </p>
              </div>
            </div>
            <div>Sidebar menus or items</div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogDetailsPage;
