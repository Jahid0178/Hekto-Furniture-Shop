"use client";

import { InputFieldProps } from "@/libs/types/types";
import Button from "../Button/Button";
import { BsSearch } from "react-icons/bs";

const Input = ({
  type,
  className,
  searchButton,
  onChange,
  placeholder,
}: InputFieldProps) => {
  return (
    <form action="#">
      <div className="flex">
        <input
          type={type}
          className={className}
          onChange={onChange}
          placeholder={placeholder}
        />
        {searchButton && (
          <Button type="submit" className="btn btn-primary">
            <BsSearch size={20} />
          </Button>
        )}
      </div>
    </form>
  );
};

export default Input;
