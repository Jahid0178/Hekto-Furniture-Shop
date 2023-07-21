"use client";

import React from "react";
import Heading from "@/components/client/Heading/Heading";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { useForm, SubmitHandler } from "react-hook-form";
import { FAQFormProps } from "@/libs/interfaces/interface";

const FAQPage = () => {
  const { register, handleSubmit } = useForm<FAQFormProps>();
  const onSubmit: SubmitHandler<FAQFormProps> = (data) => console.log(data);
  return (
    <>
      <PageHeading title="FAQ" />
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-2">
              <Heading title="General Information" />
            </div>
            <div className="p-2">
              <Heading title="Ask a Question" />
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name", { required: true })}
                  placeholder="Your Name*"
                  className="w-full border mb-4 p-2 outline-none"
                />
                <input
                  {...register("subject", { required: true })}
                  placeholder="Subject*"
                  className="w-full border mb-4 p-2 outline-none"
                />
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Type Your Message*"
                  rows={5}
                  className="w-full border mb-4 p-2 outline-none"
                />
                <input type="submit" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQPage;
