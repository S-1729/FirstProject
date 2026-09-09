import React from "react";

const EventDemo1 = () => {
  function handleClick(e) {
    console.log("Clicked");
    console.log("Button Related Data");
    console.log(`name = ${e.target.name}`);

    console.log("Event Related Data");
    console.log(`X = ${e.clientX}`);
    console.log(`keyCode = ${e.keyCode}`);
  }
  return (
    <div className="container-fluid">
      <button name="insertBtn" onClick={handleClick}>
        Inserted
      </button>
    </div>
  );
};

export default EventDemo1;
