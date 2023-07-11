"use client";

import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header>
      <div className="bg-violet-500 text-white py-2">
        <TopHeader />
      </div>
      <BottomHeader />
    </header>
  );
};

export default Header;
