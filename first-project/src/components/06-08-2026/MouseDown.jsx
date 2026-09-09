import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./MouseDown.css";

const MouseDown = () => {
  const [animations, setAnimations] = useState({
    animationName: "Spin",
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  });

  function handleMouseDown() {
    setAnimations({
      animationDuration: "0s",
    });
  }

  function handleMouseUp() {
    setAnimations({
      animationName: "Spin",
      animationDuration: "2s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
    });
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <img
        src="react.svg"
        alt=""
        width={150}
        height={150}
        style={animations}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </div>
  );
};

export default MouseDown;
