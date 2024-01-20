import React from "react";
import { Button as MaterialButton } from "@mui/material";
const Button = ({ content, color, variant }) => {
  return (
    <MaterialButton color={color} variant={variant}>
      {content}
    </MaterialButton>
  );
};

export default Button;
