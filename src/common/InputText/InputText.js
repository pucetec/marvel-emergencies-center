import React from "react";
import { Input as MaterialInput } from "@mui/material";

const Input = ({ content, color, variant }) => {
  return (
    <MaterialInput color={color} variant={variant}>
      {content}
    </MaterialInput>
  );
};
export default Input;
