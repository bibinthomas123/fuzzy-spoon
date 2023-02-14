import React, { useRef, useState } from 'react';
import * as THREE from 'three';

const Wave = ({ amplitude }) => {
  const canvasRef = useRef();

  const [camera] = useState(() => {
    const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cam.position.z = 5;
    return cam;
  });

  const [scene] = useState(() => new THREE.Scene());

  const [geometry] = useState(() => new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0)]));

  const [material] = useState(() => new THREE.PlaneGeometry({ color: 0xffffff, linewidth: 2 }));

  const [line] = useState(() => new THREE.Line(geometry, material));

  const [renderer] = useState(() => {
    const rend = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    rend.setSize(window.innerWidth, window.innerHeight);
    return rend;
  });

  const animate = () => {
    requestAnimationFrame(animate);

    line.scale.x = 1 + amplitude;
    line.scale.y = 1 + amplitude;
    line.scale.z = 1 + amplitude;

    renderer.render(scene, camera);
  };

  animate();

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', backgroundColor: 'black' }} />;
};

export default Wave;
