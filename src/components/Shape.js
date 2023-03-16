import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function Shape() {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.01;
  });

  const texture = new THREE.TextureLoader().load(
    "https://bruno-simon.com/prismic/matcaps/8.png"
  );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);

  return (
    <>
      <perspectiveCamera />
      <mesh ref={meshRef}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={1} penumbra={1} />
        <torusKnotGeometry attach="geometry" args={[1.7, 0.6, 150, 40]} />
        <meshBasicMaterial attach="material" map={texture} />
        <OrbitControls enableZoom={false} />
      </mesh>
    </>
  );
}

export default Shape;
