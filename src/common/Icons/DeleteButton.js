import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useEmergencyContext } from "../../context/EmergencyContext";

const DeleteButton = () => {
  const { removeEmergency, emergencyList } = useEmergencyContext();
  return (
    <>
      <IconButton onClick={() => removeEmergency(emergencyList.i)}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default DeleteButton;
