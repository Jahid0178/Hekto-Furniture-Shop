"use client";

import Container from "@/components/common/Container";
import { footerContents } from "@/data/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-4">Hekto</h2>
              <div>
                <address className="sub-text">
                  <h5 className="mb-2">Contact Info</h5>
                  <p className="text-sm">
                    17 Princess Road, London, Greater London NW1 8JR, UK
                  </p>
                </address>
              </div>
            </div>
            {footerContents.map((content, ind) => (
              <div key={ind}>
                <h2 className="text-2xl mb-4">{content?.title}</h2>
                <ul>
                  {content?.links?.map((link, ind) => (
                    <li key={ind}>
                      <Link
                        href="#"
                        className="sub-text hover:text-black my-2 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="bottom-footer sub-text">
        <Container>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© Webecy {new Date().getFullYear()} - All Rights Reserved</p>
            <ul className="flex gap-4">
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Instagram</li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
