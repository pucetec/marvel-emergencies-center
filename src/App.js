

import React, { useState } from 'react';

import Form from './Components/Form/Form';
import TableI from './Components/Table/Table';

const App = () => {
  const [incidents, setIncidents] = useState([]);

  const handleAddIncident = (newIncident) => {
    setIncidents([...incidents, newIncident]);
  };

  const handleDeleteIncident = (index) => {
    const updatedIncidents = [...incidents];
    updatedIncidents.splice(index, 1);
    setIncidents(updatedIncidents);
  };

  const handleAssignHero = (index) => {

    console.log(`Asignar héroe para la incidencia en el índice ${index}`);
  };

  return (
    <div>
      <h1>Central de Emergencia</h1>
      <Form onAddIncident={handleAddIncident} />
      <TableI
        incidents={incidents}
        onDeleteIncident={handleDeleteIncident}
        onAssignHero={handleAssignHero}
      />
    </div>
  );
};

export default App;

