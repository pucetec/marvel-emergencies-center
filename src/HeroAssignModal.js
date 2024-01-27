
import React, { useContext } from 'react';
import { EmergencyContext } from './EmergencyContext';

const HeroAssignModal = () => {
  const { heroes, assignHeroToEmergency, isModalOpen, selectedEmergencyId, closeModal } = useContext(EmergencyContext);

  if (!isModalOpen) {
    return null;
  }

  const onAssignHero = (heroId) => {
    assignHeroToEmergency(selectedEmergencyId, heroId);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Asignar Héroe</h2>
        {heroes.map((hero) => (
          <div key={hero.id}>
            {hero.name}
            <button onClick={() => onAssignHero(hero.id)}>Asignar</button>
          </div>
        ))}
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default HeroAssignModal;
