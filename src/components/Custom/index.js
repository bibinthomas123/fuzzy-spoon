import AnimatedCursor from "react-animated-cursor";

import React from "react";

function index() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={false}
        innerStyle={{
          backgroundColor: "#ffffff",
        }}
        outerStyle={{
          border: "3px solid #ffffff",
        }}
      />
    </div>
  );
}

export default index;
