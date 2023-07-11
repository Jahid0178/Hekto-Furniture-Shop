"use client";

import Input from "@/components/common/Input/Input";
import Logo from "@/components/common/Logo/Logo";
import { navigationLinks } from "@/data/data";
import Link from "next/link";

const BottomHeader = () => {
  return (
    <div className="container">
      <nav className="flex items-center justify-between">
        <div>
          <Logo title="Hekto" />
        </div>
        <ul className="flex gap-4">
          {navigationLinks.map((navigationLink) => (
            <li key={navigationLink.id}>
              <Link href={navigationLink.href}>{navigationLink.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Input
            type="text"
            className="input-primary"
            onChange={(e) => console.log(e.target.value)}
            searchButton={true}
          />
        </div>
      </nav>
    </div>
  );
};

export default BottomHeader;
