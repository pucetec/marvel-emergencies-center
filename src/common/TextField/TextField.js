import React from "react";
import { TextField as CusttomTextField } from "@mui/material/";

const TextField = ({ id, label, variant, type, value, onChange }) => {
  return (
    <CusttomTextField
      id={id}
      label={label}
      variant={variant}
      type={type}
      value={value}
      onChange={onChange}
    ></CusttomTextField>
  );
};
export default TextField;
