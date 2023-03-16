import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const loader = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        loader.current.style.display = "none";
      },
    });
    tl.to(loader.current, { duration: 3, opacity: 1 });
    tl.to(loader.current, { duration: 3, opacity: 0 });
  }, []);

  return (
    <div
      ref={loader}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        fontSize: "20px",
        alignItems: "center",
        opacity: 0,
        zIndex: 999,
        color: "#ffffff",
      }}
    >
      <div className="spinner">Bibin Thomas</div>
    </div>
  );
};

export default Preloader;
