import React from "react";
import "./body.css";
import Project from "./project/project";
import About from "./about/about";
import Contact from "./contact/contact";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
