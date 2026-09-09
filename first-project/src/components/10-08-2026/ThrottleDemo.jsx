import React, { useEffect, useRef, useState } from "react";

const ThrottleDemo = () => {
  const [ms, setMs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  let msRef = useRef(0);
  let secRef = useRef(0);
  let minRef = useRef(0);
  let hrRef = useRef(0);

  function stopClock() {
    msRef.current = msRef.current + 1;
    setMs(msRef.current);
    if (msRef.current === 999) {
      msRef.current = 0;
      secRef.current = secRef.current + 1;
      setSec(secRef.current);
      if (secRef.current === 59) {
        secRef.current = 0;
        minRef.current = minRef.current + 1;
        setMin(minRef.current);
      }
    }
  }

  let watchRef = useRef(null);

  function handleStartClick() {
    if (watchRef.current !== null) return;

    watchRef.current = setInterval(stopClock, 1);
  }

  function handleStopClick() {
    clearInterval(watchRef.current);
    watchRef.current = null;
  }

  function handleResetClick() {
    msRef.current = 0;
    setMs(0);
    secRef.current = 0;
    setSec(0);
    minRef.current = 0;
    setMin(0);

    handleStopClick();
  }

  return (
    <div className="container-fluid p-5 d-flex justify-content-center">
      <div>
        <div
          className="row border border-1 border-dark fs-2 fw-bold d-flex justify-content-center"
          style={{ width: "800px" }}
        >
          <div className="col-1">{hr}</div>
          <div className="col-1">:</div>
          <div className="col-1">{min}</div>
          <div className="col-1">:</div>
          <div className="col-1">{sec}</div>
          <div className="col-1">:</div>
          <div className="col-1">{ms}</div>
        </div>

        <div className="mt-5 text-center">
          <button onClick={handleStartClick} className="btn btn-primary">
            Start
          </button>
          <button onClick={handleStopClick} className="btn btn-danger ms-2">
            Stop
          </button>
          <button onClick={handleResetClick} className="btn btn-warning ms-2">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThrottleDemo;
