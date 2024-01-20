import React from "react";
import { TextField } from "@mui/material";

const InputText = ({ labelText, handleChange, value }) => {
  return <TextField value = {value} id="outlined-search" label={labelText} type="search" onChange={handleChange}></TextField>;
};

export default InputText;