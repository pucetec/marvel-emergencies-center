import React from "react";
import { useEmergencyContext } from "../../context/EmergencyContext";

const InputText = ({ placeholder }) => {
  const { emergency, handleNewEmergency } = useEmergencyContext();
  console.log(emergency);
  return (
    <div>
      <input
        placeholder={placeholder}
        value={emergency}
        onChange={handleNewEmergency}
      ></input>
    </div>
  );
};

export default InputText;
