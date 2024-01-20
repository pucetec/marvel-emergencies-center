import React from "react";
import { Button } from "@mui/material";

const TapButton = ({ text, action }) => {
  return <Button variant="contained" onClick={action}>{text}</Button>;
};

export default TapButton;