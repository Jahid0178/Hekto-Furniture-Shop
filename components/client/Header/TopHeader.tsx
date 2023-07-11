"use client";

import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";

const TopHeader = () => {
  return (
    <div className="container">
      <nav className="flex justify-between">
        <div className="flex gap-4">
          <Link
            href="mailto:zahidul.haque767@gmail.com"
            className="flex items-center gap-2"
          >
            <FaRegEnvelope />
            zahidul.haque767@gmail.com
          </Link>
          <Link href="tel:+8801789293803" className="flex items-center gap-2">
            <BiPhone />
            +8801789293803
          </Link>
        </div>
        <div>2</div>
      </nav>
    </div>
  );
};

export default TopHeader;
