import Image from "next/image";

type OfferCardProps = {
  data: {
    id: number;
    title: string;
    desc: string;
    image: string;
  };
};

const OfferCard = ({ data }: OfferCardProps) => {
  const { title, desc, image } = data;
  return (
    <div className="text-center p-4 shadow">
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="mb-4 mx-auto"
      />
      <h2 className="mb-2 text-2xl text-primary font-bold">{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default OfferCard;
