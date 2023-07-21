"use client";

import { ButtonProps } from "@/libs/types/types";

const Button = ({
  children,
  className,
  type,
  icon,
}: ButtonProps): JSX.Element => {
  console.log(icon);
  return (
    <button className={className} type={type}>
      {children} {icon}
    </button>
  );
};

export default Button;
