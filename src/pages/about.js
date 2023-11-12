import React, { useEffect } from "react";
import { motion } from "framer-motion";
import hoverEffect from "hover-effect";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import CV from "../assests/Bibinsresume.pdf";
import Info from "../components/Info";
import WebsiteData from "../data/content.js";
import ScrollDown from "../components/ScrollDown";
import Qualification from "../components/Qualification";

const Styles = styled.div`
  canvas {
    padding: 10px;
  }
`;

function About() {
  useEffect(() => {
    AOS.init();
    new hoverEffect({
      parent: document.querySelector('.ticket'),
      intensity1: 0.1,
      intensity2: 0.1,  
      angle2: Math.PI / 2,
      imagesRatio:  380 / 300,
      image1: 'https://i.imgur.com/4zl33yb.jpg',
      image2: 'https://i.imgur.com/QjYLW9y.jpg',
      displacementImage: 'https://i.imgur.com/4Os9Q7o.jpg'
    });
  }, []);

  return (
   <Styles>
     <motion.div
      initial={{ y: 150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -150, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <section className="about section">
        <motion.h2
          className="section__title"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          About Me
        </motion.h2>
        <motion.span
          className="section__subtitle"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -150, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          My introduction
        </motion.span>

        <div className="about__container container grid">
        <div class="ticket">
          <div class="overlay"></div>
          <div class="flight-info">
            <div class="flight-locations">
              <img src="https://cdn-images-1.medium.com/max/800/1*QFU_XYAKOGJ9nunfqvem1w.png" />
              <h1>YMESLF</h1>
            </div>
          </div>
        </div>
          <div className="about__data">
            <Info data={WebsiteData.about.cardDetails} />
            <motion.p
              className="about__description"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -150, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              {WebsiteData.about.desc}
            </motion.p>
            <motion.a href={CV} className="button button--flex" download="">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {/* ... (SVG path elements) */}
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
      <div className="about__scroll">
        <ScrollDown />
      </div>
      <Qualification data={WebsiteData.about.qualifications} />
    </motion.div>
   </Styles>
  );
}

export default About;
