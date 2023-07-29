"use client";

import { ButtonProps } from "@/libs/types/types";

const Button = ({
  children,
  className,
  type,
  icon,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children} {icon}
    </button>
  );
};

export default Button;
