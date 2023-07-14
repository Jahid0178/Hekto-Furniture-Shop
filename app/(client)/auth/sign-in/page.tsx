"use client";

import React from "react";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { LogInFormInput } from "@/libs/interfaces/interface";
import { useForm, SubmitHandler } from "react-hook-form";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<LogInFormInput>();
  const onSubmit: SubmitHandler<LogInFormInput> = (data) => console.log(data);
  return (
    <section>
      <PageHeading title="My Account" />
      <Container>
        <h2>Log In Page</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: true, maxLength: 20 })}
          />
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          <input type="number" {...register("age", { min: 18, max: 99 })} />
          <input type="submit" />
        </form>
      </Container>
    </section>
  );
};

export default SignInPage;
