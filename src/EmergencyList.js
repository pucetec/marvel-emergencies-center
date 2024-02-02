import React, { useContext } from 'react';
import { EmergencyContext } from './EmergencyContext';

const EmergencyList = () => {
  const { emergencies, assignHeroToEmergency, removeEmergency, openModal, heroes } = useContext(EmergencyContext);

  const getHeroName = (heroId) => {
    const hero = heroes.find(h => h.id === heroId);
    return hero ? hero.name : 'Sin héroe asignado';
  };

  return (
    <>
      <h2>Emergencias sin asignar</h2>
      <div>
        {emergencies.filter(e => !e.heroId).map((emergency, index) => (
          <div key={emergency.id}>
            <span>{index + 1}. {emergency.description}</span>
            <button onClick={() => openModal(emergency.id)}>Asignar Héroe</button>
            <button onClick={() => removeEmergency(emergency.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <h2>Emergencias Asignadas</h2>
      <div>
        {emergencies.filter(e => e.heroId).map((emergency, index) => (
          <div key={emergency.id}>
            <span>{index + 1}. {emergency.description} - Héroe Asignado: {getHeroName(emergency.heroId)}</span>
            <button onClick={() => openModal(emergency.id)}>Reasignar Héroe</button>
            <button onClick={() => removeEmergency(emergency.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmergencyList;
