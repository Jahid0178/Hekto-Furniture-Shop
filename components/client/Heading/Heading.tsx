import { TitleProps } from "@/libs/types/types";

const Heading = ({ title, description, className }: TitleProps) => {
  return (
    <div className={`${className} mb-4`}>
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      {description?.length && <p>{description}</p>}
    </div>
  );
};

export default Heading;
