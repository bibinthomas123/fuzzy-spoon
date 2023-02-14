// import React, { useEffect, useRef, useState } from "react";
// import LocomotiveScroll from "locomotive-scroll";

// const LocomotiveScrollContainer = () => {
//   const containerRef = useRef(null);
//   const [scrollX, setScrollX] = useState(0);

//   useEffect(() => {
//     const locomotiveScroll = new LocomotiveScroll({
//       el: containerRef.current,
//       smooth: true,
//       getDirection: true,
//       direction: "horizontal",
//       smartphone: {
//         smooth: true,
//       },
//     });

//     locomotiveScroll.on("scroll", (obj) => {
//       setScrollX(obj.scroll.x);
//     });

//     return () => {
//       locomotiveScroll.destroy();
//     };
//   }, []);

//   return (
//     <div ref={containerRef}>
//       <div
//         className="strip"
//         data-scroll
//         data-scroll-speed="2"
//         data-scroll-position="right"
//         data-scroll-direction="horizontal"
//       >
//         <div
//           className="strip__item"
//           style={{ transform: `translate3d(-${scrollX}px, 0, 0)` }}
//         >
//           Bibin Thomas
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocomotiveScrollContainer;
