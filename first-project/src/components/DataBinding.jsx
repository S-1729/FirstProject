import React, { useEffect, useState } from "react";

const DataBinding = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(100);
  });
  return <div>{count}</div>;
};

export default DataBinding;
