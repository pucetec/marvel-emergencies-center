import React from "react";
import TextField from "@mui/material/TextField";

const TextField = ({ label, value, onChange }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    />
  );
};

export default TextField;
