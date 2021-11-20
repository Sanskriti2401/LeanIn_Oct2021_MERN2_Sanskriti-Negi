import React from "react";
import "./header.css";
import Nav from "./Nav/nav";

function Header() {
  return (
    <div className="header">
      <Nav />
      <div className="home">
        <div className="home-content">
          <div className="text">
            Hello there!<br></br>
            <span className="info">I'm Sanskriti Negi</span>
            <br></br>A CODER, DEVELOPER AND LEARNER ..
          </div>
          <img
            className="img"
            src={require("../../images/Coding-pana.png").default}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
