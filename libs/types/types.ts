export type ButtonProps = {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
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
};
