import React, { useState } from 'react';
import { EmergencyProvider } from './EmergencyContext';
import EmergencyInput from './EmergencyInput';
import EmergencyList from './EmergencyList';

const initialEmergencies = [
  { id: 1, description: 'Robo en Fake street 1234', hero: null },
  { id: 2, description: 'Secuestro en edificio Empire States', hero: null }
];

const initialHeroes = [
  { id: 1, name: 'Spiderman' },
  { id: 2, name: 'Iron Man' }

];

function App() {
  const [emergencies, setEmergencies] = useState(initialEmergencies);
  const [heroes, setHeroes] = useState(initialHeroes);

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

  const unassignedEmergencies = emergencies.filter((e) => !e.hero);
  const assignedEmergencies = emergencies.filter((e) => e.hero);

  return (
    <EmergencyProvider>
    <div className="App">
      <h1>Central de Emergencias</h1>
      <EmergencyInput />
      <EmergencyList />
    </div>
  </EmergencyProvider>
);
}


export default App;
