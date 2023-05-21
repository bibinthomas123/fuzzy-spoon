import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const CustomCursor = () => {
  const secondaryCursor = useRef(null);
  const [isCursorVisible, setCursorVisible] = useState(true);
  const [timer, setTimer] = useState(null);

  const positionRef = useRef({
    mouseX: -100,
    mouseY: -100,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;

      // Reset the cursor visibility timer
      clearTimeout(timer);
      setTimer(setTimeout(() => setCursorVisible(false), 2000));
      setCursorVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, [timer]);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (secondaryCursor.current && secondaryCursor) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        secondaryCursor.current.style.opacity = isCursorVisible ? 1 : 0;
         // Hide the cursor when not in motion

        // Apply fading effect
        if (isCursorVisible) {
          secondaryCursor.current.style.transition = "opacity 0.3s";
        } else {
          secondaryCursor.current.style.transition = "opacity 0.5s";
        }
      }
    };

    followMouse();
  }, [isCursorVisible]);

  return (
    <div className={`cursor-wrapper default`}>
      <div className="secondary-cursor" ref={secondaryCursor}></div>
    </div>
  );
};

export default CustomCursor;
