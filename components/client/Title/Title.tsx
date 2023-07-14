import { TitleProps } from "@/libs/types/types";

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="text-center mb-4">
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      {description?.length && <p>{description}</p>}
    </div>
  );
};

export default Title;
