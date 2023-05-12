import Social from "../components/Social";
import Data from "../components/Data";
import { motion } from "framer-motion";
import WebsiteData from "../data/content.js";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/models/Myself";
import { SpotLight } from "@react-three/drei";

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

              {/* 3d images */}
              <Canvas
                camera={{ position: [1, 0,7], fov: 20 }}
                style={{
                  width: "100%",
                  height: "470px",
                }}
                shadows
              >
                <SpotLight
                  position={[10, 10, 10]}
                  intensity={2}
                  distance={84.45}
                  angle={0.742463063798388}
                  penumbra={1}
                  decay={2}
                  castShadow
                />
                <Suspense fallback={null}>
                  <Model position={[0.025, -0.9, 0]} />
                </Suspense>
                <OrbitControls enableZoom={false} />
                <fog attach="fog" args={["#000000", 10, 50]} />
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
