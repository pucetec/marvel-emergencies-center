import { createContext, useContext, useState } from "react";

const EmergencyContext = createContext();

const EmergencyContextProvider = ({ children }) => {
  return <EmergencyContext.Provider>{children}</EmergencyContext.Provider>;
};

export default EmergencyContext;

export const useEmergencyContext = () => useContext(EmergencyContext);
