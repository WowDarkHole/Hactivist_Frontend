import React, { useState } from "react";
const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item border-b-2 border-slate-400 bg-white">
      <div className="accordion-toggle bg-[#D9A06650] hover:bg-[#D9A06699]" onClick={() => setIsActive(!isActive)}>
        <h3 className="pixel-font text-xl">{heading}</h3><span className="text-3xl">{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className="accordion-content bg-white pixel-font text-xl">{content}</div>}
    </li>
  );
};

export default Accordion;