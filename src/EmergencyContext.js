import React, { createContext, useState } from 'react';

export const EmergencyContext = createContext();

export const EmergencyProvider = ({ children }) => {
  const [emergencies, setEmergencies] = useState([]);
  const [heroes, setHeroes] = useState([
    { id: 1, name: 'Spiderman' },
    { id: 2, name: 'Iron Man' },
    {id: 3, name: 'Batman'},
    { id: 4, name: 'Hulk'}
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEmergencyId, setSelectedEmergencyId] = useState(null);

  const addEmergency = (description) => {
    const newEmergency = {
      id: emergencies.length + 1,
      description,
      heroId: null
    };  
    setEmergencies(prevEmergencies => [...prevEmergencies, newEmergency]);
  };

  const assignHeroToEmergency = (emergencyId, heroId) => {
    setEmergencies(prevEmergencies =>
      prevEmergencies.map(emergency =>
        emergency.id === emergencyId ? { ...emergency, heroId: heroId } : emergency
      )
    );
  };

  const removeEmergency = (emergencyId) => {
    setEmergencies(prevEmergencies =>
      prevEmergencies.filter(emergency => emergency.id !== emergencyId)
    );
  };

  const openModal = (emergencyId) => {
    setSelectedEmergencyId(emergencyId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <EmergencyContext.Provider value={{
      emergencies,
      heroes,
      addEmergency,
      assignHeroToEmergency,
      removeEmergency,
      isModalOpen,
      selectedEmergencyId,
      openModal,
      closeModal
    }}>
      {children}
    </EmergencyContext.Provider>
  );
};
