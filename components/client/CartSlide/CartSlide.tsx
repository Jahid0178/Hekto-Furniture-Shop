"use client";

import React from "react";

const CartSlide = ({ toggle, setToggle }: { toggle: any; setToggle: any }) => {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 bg-white text-black p-2 shadow-md max-w-sm  w-96 transition-all ${
        toggle ? "translate-x-0" : "translate-x-96"
      } z-50`}
    >
      <button onClick={() => setToggle(!toggle)}>X</button>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Product Cart Is Empty</h2>
      </div>
    </div>
  );
};

export default CartSlide;
