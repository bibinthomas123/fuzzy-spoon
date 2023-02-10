import React from "react";
import Sections from "../components/sections";
import { motion } from "framer-motion";
function Skills() {
  return (
    <motion.section
      className="skills section"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Sections />
      </div>
    </motion.section>
  );
}

export default Skills;
