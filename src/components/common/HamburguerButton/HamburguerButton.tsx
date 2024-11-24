import React, { useState } from "react";
import "./HamburgerButton.css";

interface HamburgerButtonProps {
  onToggle: () => void;
  isNavOpen: boolean;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  onToggle,
  isNavOpen,
}) => {
  return (
    <div className="hamburger" onClick={onToggle}>
      <span
        className={`bar ${isNavOpen ? "open bg-[#006829]" : "bg-black"}`}
      ></span>
      <span className={`bar ${isNavOpen ? "open" : "bg-black"}`}></span>
      <span
        className={`bar ${isNavOpen ? "open bg-[#006829]" : "bg-black"}`}
      ></span>
    </div>
  );
};

export default HamburgerButton;
