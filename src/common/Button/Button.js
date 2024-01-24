import React from "react";

const Button = ({ onClick, value }) => {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
};

export default Button;
