import React from "react";
import IconButton from "@mui/material/IconButton";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import DeleteIcon from "@mui/icons-material/Delete";

const Icon = () => {
  return (
    <div>
      <IconButton aria-label="center-focus-strong">
        <CenterFocusStrongIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Icon;
