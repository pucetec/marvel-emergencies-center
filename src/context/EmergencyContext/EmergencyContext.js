import React, { createContext, useState, useContext } from "react";

const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [unassignedEmergency, setUnassignedEmergency] = useState([]);

  const addEmergency = (number, description) => {
    const newEmergency = {
      number,
      description,
    };

    setUnassignedEmergency((prevUnassignedEmergency) => [
      ...prevUnassignedEmergency,
      newEmergency,
    ]);
  };

  return (
    <EmergencyContext.Provider
      value={{ unassignedEmergency, setUnassignedEmergency, addEmergency }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};
export function useEmergency() {
  return useContext(EmergencyContext);
};
