"use client";

type PageHeadingProps = {
  title: string;
};

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <div className="py-20 bg-[#F6F5FF]">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary">{title}</h2>
      </div>
    </div>
  );
};

export default PageHeading;
