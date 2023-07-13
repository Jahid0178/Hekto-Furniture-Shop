"use client";

import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header>
      <div className="hidden md:block bg-violet-500 text-white py-2">
        <TopHeader />
      </div>
      <div className="py-4">
        <BottomHeader />
      </div>
    </header>
  );
};

export default Header;
