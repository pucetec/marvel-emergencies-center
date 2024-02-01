import React from "react";
import { TextField as CusttomTextField } from "@mui/material/";

const TextField = ({ id, label, variant, type, value, size, onChange }) => {
  return (
    <CusttomTextField
      id={id}
      label={label}
      variant={variant}
      type={type}
      value={value}
      size={size}
      onChange={onChange}
    ></CusttomTextField>
  );
};
export default TextField;
