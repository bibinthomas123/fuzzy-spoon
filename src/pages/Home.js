import React from "react";
import Social from "../components/Social";
import Data from "../components/Data";
import { motion } from "framer-motion";
import WebsiteData from "../data/content.js";

function Home() {
  return (
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    >
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social data={WebsiteData.home.socialItems} />
            <div className="home__img"></div>
            <Data
              title={WebsiteData.home.title}
              content={WebsiteData.home.desc}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
