"use client";

import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header>
      <div className="container">
        <TopHeader />
        <BottomHeader />
      </div>
    </header>
  );
};

export default Header;
