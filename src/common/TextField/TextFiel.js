import React from "react";
import { TextField as CusttomTextField } from "@mui/material/";

const TextField = ({ id, label, variant }) => {
  return (
    <CusttomTextField
      id={id}
      label={label}
      variant={variant}
    ></CusttomTextField>
  );
};
export default TextField;
