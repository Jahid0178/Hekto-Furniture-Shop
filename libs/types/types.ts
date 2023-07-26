import { IconType } from "react-icons";

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: React.ReactNode;
};

export type InputFieldProps = {
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  searchButton?: boolean;
  placeholder?: string;
};

export type PromoAdsProps = {
  title: string;
  src: string;
  variant: string;
};

export type TitleProps = {
  title: string;
  description?: string;
  className?: string;
};

export type ProductCardProps = {
  title: string;
  code: string;
  price: string;
  imgUrl: string;
  id: number | string;
};

export type NewsLaterProps = {
  title: string;
};

export type cartTableItemProps = {
  data: {
    id: number;
    product_name: string;
    imgSrc: string;
    price: number;
    quantity: number;
    total: number;
  };
};

export type AdminLoginInputs = {
  email: string;
  password: string;
};
