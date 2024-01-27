import React from 'react';
import { EmergencyProvider } from './EmergencyContext';
import EmergencyInput from './EmergencyInput';
import EmergencyList from './EmergencyList';
import HeroAssignModal from './HeroAssignModal';
import './App.css'

const App = () => {
  return (
    <EmergencyProvider>
      <h1>Central de Emergencias</h1>
      <EmergencyInput />
      <EmergencyList />
      <HeroAssignModal />
    </EmergencyProvider>
  );
};

export default App;
