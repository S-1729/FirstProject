import React from "react";

//children is a builtin prop to accept html from the parent
const Card = ({ children }) => {
  return <div>{children}</div>;
};

export default Card;
