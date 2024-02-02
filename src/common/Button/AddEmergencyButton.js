import React from "react";
import { useEmergencyContext } from "../../context/EmergencyContext";

const AddEmergencyButton = ({ value }) => {
  const { handleEmergencyAdded } = useEmergencyContext();
  return (
    <div>
      <button onClick={handleEmergencyAdded}>{value}</button>
    </div>
  );
};

export default AddEmergencyButton;
