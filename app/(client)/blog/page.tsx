"use client";

import BlogCard from "@/components/client/Cards/BlogCard/BlogCard";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <PageHeading title="Blog Page" />
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(900px,_1fr)_400px] gap-4">
            <div className="p-2 flex flex-col gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <BlogCard key={item} />
              ))}
            </div>
            <div className="p-2">2</div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;
