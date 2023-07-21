"use client";

import React from "react";
import Button from "@/components/common/Button/Button";
import { accordionContents } from "@/data/data";

const Accordion = () => {
  const [toggles, setToggles] = React.useState(
    accordionContents.map(() => false)
  );

  const handleToggle = (index: number) => {
    const newToggles = toggles.map((toggle, ind) =>
      ind === index ? !toggle : toggle
    );
    setToggles(newToggles);
  };

  return (
    <div>
      {accordionContents.map((item, index) => (
        <div key={item.id} className="mb-2" onClick={() => handleToggle(index)}>
          <Button type="button" className="w-full text-left p-2 bg-gray-200">
            {item.title}
          </Button>
          {toggles[index] && <div className="p-2">{item.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
