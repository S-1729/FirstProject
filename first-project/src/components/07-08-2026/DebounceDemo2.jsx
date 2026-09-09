import React, { useRef, useState } from "react";

const DebounceDemo2 = () => {
  const [volume, setVolume] = useState(1);
  const [msg, setMsg] = useState("");

  let l2 = useRef(null);

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
    setTimeout(Level1, 3000);
    l2.current = setTimeout(Level2, 6000);
    setTimeout(Level3, 10000);
  }

  function handleCancelLevel() {
    alert("Level 2 Cancelled");
    clearTimeout(l2.current);
  }

  return (
    <div className="container-fluid p-4">
      <button
        onClick={handleVolumeClick}
        className="btn btn-primary bi bi-volume-up-fill"
      ></button>
      <button onClick={handleCancelLevel} className="btn btn-warning m-2">
        Cancel Level
      </button>
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

export default DebounceDemo2;
