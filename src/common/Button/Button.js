import React from "react";
import { useEmergencyContext } from "../../context/EmergencyContext";

const Button = ({ value }) => {
  const { handleEmergencyAdded } = useEmergencyContext();
  return (
    <div>
      <button onClick={handleEmergencyAdded}>{value}</button>
    </div>
  );
};

export default Button;
