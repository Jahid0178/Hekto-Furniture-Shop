"use client";

import { useState } from "react";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import CartSlide from "../CartSlide/CartSlide";
import Container from "@/components/common/Container";

const TopHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Container>
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
              </li>
              <li>
                <Link href="/auth/sign-in/">Login</Link>
              </li>
              <li>
                <Link href="#">Wishlist</Link>
              </li>
              <li>
                <Link href="#" onClick={() => setToggle(!toggle)}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
      <CartSlide toggle={toggle} setToggle={setToggle} />
    </>
  );
};

export default TopHeader;
