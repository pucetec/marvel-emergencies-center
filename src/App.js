import React from 'react';
import { EmergencyProvider } from './EmergencyContext';
import EmergencyInput from './EmergencyInput';
import EmergencyList from './EmergencyList';

function App() {
  return (
    <EmergencyProvider>
      <div className="App">
        <h1>Central de Emergencias</h1>
        <EmergencyInput />
        <EmergencyList />
        {}
      </div>
    </EmergencyProvider>
  );
}

export default App;
