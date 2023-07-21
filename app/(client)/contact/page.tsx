"use client";

import Heading from "@/components/client/Heading/Heading";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
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
            <div className="p-2">2</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-2">
              <h2>Get In Touch</h2>
              <p className="sub-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                praesentium vitae commodi veniam cumque incidunt ipsum
                laboriosam nam voluptas enim?
              </p>
            </div>
            <div className="p-2">2</div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
