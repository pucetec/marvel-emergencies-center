import React from "react";
import { useEmergencyContext } from "../../context/EmergencyContext";

const Button = ({ value }) => {
  const {} = useEmergencyContext();
  return (
    <div>
      <button onClick={() => ""}>{value}</button>
    </div>
  );
};

export default Button;
