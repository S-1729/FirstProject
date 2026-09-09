import React, { useState } from "react";

const MouseMove = () => {
  const [flag, setFlag] = useState({ position: "", top: "", left: "" });

  function handleMouseMove(e) {
    setFlag({ position: "fixed", top: e.clientY, left: e.clientX });
  }
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
      onMouseMove={handleMouseMove}
    >
      <img src="flag.gif" alt="" style={flag} />
    </div>
  );
};

export default MouseMove;
