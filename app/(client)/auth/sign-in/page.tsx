"use client";

import React from "react";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { LogInFormInput } from "@/libs/interfaces/interface";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<LogInFormInput>();
  const onSubmit: SubmitHandler<LogInFormInput> = (data) => console.log(data);
  return (
    <section>
      <PageHeading title="My Account" />
      <Container>
        <div className="p-10 w-1/3 mx-auto">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold mb-2 text-primary">Log In</h2>
            <p className="sub-text">
              Please login using account detail bellow.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className="w-full border border-[#C2C5E1] rounded p-2 outline-none mb-4"
              {...register("email", { required: true, maxLength: 20 })}
              placeholder="Email Address"
            />
            <input
              type="password"
              className="w-full border border-[#C2C5E1] rounded p-2 outline-none mb-4"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            <Link
              href="#"
              className="mb-4 inline-block sub-text hover:text-primary"
            >
              Forgot Your Password
            </Link>
            <input
              type="submit"
              className="w-full cursor-pointer bg-primary py-2 text-white"
            />
          </form>
          <p className="mt-4 text-center sub-text">
            Don&apos;t have an Account?{" "}
            <Link href="#" className="hover:text-primary">
              Create account
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SignInPage;
