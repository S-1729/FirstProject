import React, { useState } from "react";

const EventDemo3 = () => {
  const [name, setName] = useState("John");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello {name}</p>
    </div>
  );
};

export default EventDemo3;
