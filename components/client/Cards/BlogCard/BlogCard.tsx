import Image from "next/image";
import { FaPenNib } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="shadow rounded-lg">
      <Image
        src="/images/blog/blog-1.png"
        alt="Blog Image"
        width={550}
        height={380}
        className="w-full rounded-lg"
      />
      <div className="p-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <FaPenNib color={"#FB2E86"} /> Saber Ali
          </span>
          <span className="flex items-center gap-2">
            <BsCalendar3 color={"#FFA454"} /> 21 August, 2023
          </span>
        </div>
        <h2 className="py-4 text-2xl font-bold text-primary hover:text-secondary">
          Top essential Trends in 2023
        </h2>
        <p className="text-[#72718F]">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </p>
        <Link href="#" className="mt-5 inline-block text-[#151875] underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
