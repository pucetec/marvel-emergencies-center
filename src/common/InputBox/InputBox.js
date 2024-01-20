import React from "react";
import { TextField as MaterialInputbox } from "@mui/material";

export const TextField = ({ label, variant, onChange }) => {
  return (
    <MaterialInputbox
      label={label}
      variant={variant}
      onChange={onChange}
    ></MaterialInputbox>
  );
};
