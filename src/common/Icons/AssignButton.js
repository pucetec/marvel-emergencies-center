import React from "react";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import IconButton from "@mui/material/IconButton";
import { useEmergencyContext } from "../../context/EmergencyContext";

const AssignButton = () => {
  const { setOpen } = useEmergencyContext();
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <IconButton onClick={handleOpen}>
        <CenterFocusStrongIcon />
      </IconButton>
    </>
  );
};

export default AssignButton;
