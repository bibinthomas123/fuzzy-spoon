import React from "react";
import Sections from "../../components/sections";
import WebsiteData from "../../data/content";
function Skills() {
  return (
    <section className="skills section">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Sections/>
      </div>
    </section>
  );
}

export default Skills;
