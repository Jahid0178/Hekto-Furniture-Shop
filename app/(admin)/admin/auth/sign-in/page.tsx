"use client";

import React from "react";
import Container from "@/components/common/Container";
import { useForm, SubmitHandler } from "react-hook-form";
import { AdminLoginInputs } from "@/libs/types/types";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginInputs>();
  const onSubmit: SubmitHandler<AdminLoginInputs> = (data) => console.log(data);

  return (
    <section>
      <Container>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-1/3 p-4 border mx-auto shadow-md"
          >
            <div className="mb-4 text-center">
              <h2 className="text-2xl">Admin Login</h2>
            </div>
            <div>
              <label htmlFor="email" className="mb-2 inline-block">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full border mb-4 p-2 outline-none"
              />
            </div>

            {errors.email && (
              <span className="mb-2 inline-block bg-red-200 py-1 px-2 rounded-sm">
                This field is required
              </span>
            )}

            <div>
              <label htmlFor="password" className="mb-2 inline-block">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-full border mb-4 p-2 outline-none"
              />
            </div>

            {errors.password && (
              <span className="mb-2 inline-block bg-red-200 py-1 px-2 rounded-sm">
                This field is required
              </span>
            )}

            <br />

            <input type="submit" value="Log In" className="btn btn-secondary" />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignInPage;
