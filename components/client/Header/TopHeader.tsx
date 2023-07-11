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
        <div>
          <ul className="flex gap-4">
            <li>
              <Link href="#">English</Link>
            </li>
            <li>
              <Link href="#">USD</Link>
            </li><
              li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">Wishlist</Link>
            </li>
            <li>
              <Link href="#">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopHeader;
