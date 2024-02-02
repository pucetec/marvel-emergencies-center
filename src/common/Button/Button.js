import React from "react";
import { Button as MaterialButton } from "@mui/material";
const Button = ({ content, color, variant, onClick }) => {
  return (
    <MaterialButton
      className="button"
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {content}
    </MaterialButton>
  );
};

export default Button;
