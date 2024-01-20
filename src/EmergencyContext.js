import React, { createContext, useState } from 'react';

export const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const addEmergency = (description) => {
    const newEmergency = {
      id: emergencies.length + 1, 
      description,
      hero: null
    };
    setEmergencies([...emergencies, newEmergency]);
  };

  const assignHeroToEmergency = (emergencyId, heroId) => {
    setEmergencies(
      emergencies.map((emergency) =>
        emergency.id === emergencyId ? { ...emergency, hero: heroId } : emergency
      )
    );
  };

  return (
    <EmergencyContext.Provider value={{
      emergencies,
      heroes,
      addEmergency,
      assignHeroToEmergency
    }}>
      {children}
    </EmergencyContext.Provider>
  );
};
