import Social from "../components/Social";
import Data from "../components/Data";
import { motion } from "framer-motion";
import WebsiteData from "../data/content.js";
import { Canvas } from "@react-three/fiber";
import Shape from "../components/Shape";
import styled from "styled-components";

const Styles = styled.div`
  canvas {
    padding: 10px;
  }
`;

function Home() {
  return (
    <Styles>
      <motion.div
        className="box"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 150, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      ></motion.div>
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
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <Social data={WebsiteData.home.socialItems} />

              <Canvas>
                <Shape />
              </Canvas>

              <Data
                title={WebsiteData.home.title}
                content={WebsiteData.home.desc}
              />
            </div>
          </div>
        </section>
      </motion.div>
    </Styles>
  );
}

export default Home;
