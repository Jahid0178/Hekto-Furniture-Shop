"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import PageHeading from "@/components/common/PageHeading/PageHeading";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpFormInput } from "@/libs/interfaces/interface";
import Link from "next/link";

const SignUpPage = () => {
  const [formData, setFormData] = useState({});
  const { register, handleSubmit } = useForm<SignUpFormInput>();
  const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
    setFormData(data);
  };
  console.log(formData);

  return (
    <>
      <PageHeading title="Sign Up" />
      <section>
        <Container>
          <div className="p-10 w-1/3 mx-auto">
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary">Sign Up</h2>
              <p className="sub-text">Please create a new account.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                className="w-full border border-[#C2C5E1] rounded p-2 outline-none mb-4"
                {...register("fullName", { required: true, maxLength: 20 })}
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full border border-[#C2C5E1] rounded p-2 outline-none mb-4"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />
              <input
                type="password"
                className="w-full border border-[#C2C5E1] rounded p-2 outline-none mb-4"
                {...register("password", { required: true })}
                placeholder="Password"
              />
              <Link
                href="/auth/sign-in"
                className="mb-4 inline-block sub-text hover:text-primary"
              >
                Already have an account?
              </Link>
              <input
                type="submit"
                className="w-full cursor-pointer bg-primary py-2 text-white"
                value="Create an account"
              />
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SignUpPage;
