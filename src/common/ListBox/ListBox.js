import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const ListBox = ({ list, handleChange, value}) => {

  return (
    <Autocomplete
      disablePortal
      id="combo-box"
      options={list}
      sx={{ width: 300 }}
      onChange={handleChange}
      value = {value}
      renderInput={(params) => <TextField {...params} label="Super Heroe"/>}
    />
  );
};

export default ListBox;