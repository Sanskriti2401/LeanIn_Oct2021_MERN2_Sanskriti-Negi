import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="web">
      <div className="option">
        <a href="#">Home</a>
      </div>
      <div className="option">
        <a href="#about">About</a>
      </div>
      <div className="option">
        <a href="#projects">Projects</a>
      </div>
      <div className="option">
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
