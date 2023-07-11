"use client";

import { ButtonProps } from "@/libs/types/types";

const Button = ({ children, className, type }: ButtonProps): JSX.Element => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;