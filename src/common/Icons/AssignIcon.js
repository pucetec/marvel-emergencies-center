import React from "react";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import IconButton from "@mui/material/IconButton";

const AssignIcon = (onClick) => {
  return (
    <>
      <IconButton onClick={onClick}>
        <CenterFocusStrongIcon />
      </IconButton>
    </>
  );
};

export default AssignIcon;
