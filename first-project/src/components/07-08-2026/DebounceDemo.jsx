import React, { useState } from "react";

const DebounceDemo = () => {
  const [volume, setVolume] = useState(1);
  const [msg, setMsg] = useState("");

  function Level1() {
    setMsg("Volume Increased 30%");
    setVolume(30);
  }

  function Level2() {
    setMsg("Volume Increased 70%");
    setVolume(70);
  }

  function Level3() {
    setMsg("Volume Increased 100%");
    setVolume(100);
  }

  function handleVolumeClick() {
    setTimeout(Level1, 5000);
    setTimeout(Level2, 10000);
    setTimeout(Level3, 15000);
  }

  return (
    <div className="container-fluid p-4">
      <button
        onClick={handleVolumeClick}
        className="btn btn-primary bi bi-volume-up-fill"
      ></button>
      <div className="w-50">
        <input
          type="range"
          min={1}
          max={100}
          value={volume}
          className="form-range"
        />
      </div>
      <p>{msg}</p>
    </div>
  );
};

export default DebounceDemo;
