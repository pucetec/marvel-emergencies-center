import React from "react";
import { Button as MaterialButton } from "@mui/material";

const Button = ({ variant, spacing, direction, value }) => {
  return (
    <MaterialButton variant={variant} spacing={spacing} direction={direction}>{value}</MaterialButton>
  );
};
export default Button;
