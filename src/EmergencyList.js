import React, { useContext } from 'react';
import { EmergencyContext } from './EmergencyContext';

const EmergencyList = () => {
  const { emergencies, assignHeroToEmergency, removeEmergency, openModal } = useContext(EmergencyContext);

  return (
    <>
      <h2>Emergencias sin asignar</h2>
      <div>
        {emergencies.filter(e => !e.heroId).map((emergency) => (
          <div key={emergency.id}>
            <span>{emergency.description}</span>
            <button onClick={() => openModal(emergency.id)}>Asignar Héroe</button>
            <button onClick={() => removeEmergency(emergency.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <h2>Emergencias Asignadas</h2>
      <div>
        {emergencies.filter(e => e.heroId).map((emergency) => (
          <div key={emergency.id}>
            <span>{emergency.description}</span>
            <button onClick={() => openModal(emergency.id)}>Reasignar Héroe</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmergencyList;
