import React from "react";
import { Input as MaterialInputbox } from "@mui/material";

export const TextField = ({ id, placeholder, onChange }) => {
  return (
    <MaterialInputbox
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    ></MaterialInputbox>
  );
};
