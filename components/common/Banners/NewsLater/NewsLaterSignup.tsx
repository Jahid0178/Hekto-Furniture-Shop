import React from "react";
import Link from "next/link";
import { NewsLaterProps } from "@/libs/types/types";

const NewsLaterSignup = ({ title }: NewsLaterProps) => {
  return (
    <div className="text-center bg-newslater-pattern py-28">
      <h2 className="mb-5 text-3xl font-bold text-primary">{title}</h2>
      <Link href="#" className="btn btn-primary inline-block">
        Shop Now
      </Link>
    </div>
  );
};

export default NewsLaterSignup;
