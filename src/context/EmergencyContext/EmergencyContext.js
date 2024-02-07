import React, { createContext, useState, useContext } from "react";

const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [unassignedEmergency, setUnassignedEmergency] = useState([]);
  const [assignedEmergency, setAssignedEmergency] = useState([]);
  const [emergencySelected, setEmergencySelected] = useState([]);

  const addEmergency = (number, description) => {
    const newEmergency = {
      number,
      description,
      isAssigned: false,
    };

    setUnassignedEmergency((prevUnassignedEmergency) => [
      ...prevUnassignedEmergency,
      newEmergency,
    ]);
  };

  const deleteEmergency = (number, isAssigned) => {
    if (isAssigned) {
      setAssignedEmergency((prevAssignedEmergency) =>
        prevAssignedEmergency.filter((emergency) => emergency.number !== number)
      );
    }
    else {
      setUnassignedEmergency((prevUnassignedEmergency) =>
        prevUnassignedEmergency.filter((emergency) => emergency.number !== number)
      );
    }
    
  }
  const addAssignedEmergency = (number, description, hero) => {
    const newEmergency = {
      number,
      description,
      isAssigned: true,
      hero,
    };
    setAssignedEmergency((prevAssignedEmergency) => [
      ...prevAssignedEmergency,
      newEmergency,
    ]);
  };

  return (
    <EmergencyContext.Provider
      value={{
        unassignedEmergency,
        setUnassignedEmergency,
        addEmergency,
        assignedEmergency,
        setAssignedEmergency,
        addAssignedEmergency,
        emergencySelected,
        setEmergencySelected,
        deleteEmergency
      }}
    >
      {children}
    </EmergencyContext.Provider>
  );
};
export function useEmergency() {
  return useContext(EmergencyContext);
}
