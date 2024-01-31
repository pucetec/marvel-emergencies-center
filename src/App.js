

import React, { useState } from 'react';


import Form from './Components/Form/Form';
import TableI from './Components/Table/Table';

import env from "react-dotenv";
import axios from 'axios';
import md5 from 'md5';
import DeleteButton from './Components/Button/DeleteButton';
import AssignedEmergenciesTable from './Components/Table/AssignedEmergenciesTable';

const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [unassignedEmergencies, setUnassignedEmergencies] = useState([]);
  const [heroes] = useState(['SpiderMan', 'Batman']);
  const [assignedEmergencies, setAssignedEmergencies] = useState([]);

  const handleAddIncident = (newIncident) => {
    setIncidents([...incidents, newIncident]);
    setUnassignedEmergencies([...unassignedEmergencies, newIncident.name]);
  };

  const handleDeleteIncident = (index) => {
    const updatedIncidents = [...incidents];
    updatedIncidents.splice(index, 1);
    setIncidents(updatedIncidents);
  };

  const handleAssignHero = (name, hero) => {
    const assignedIncident = incidents.find(incident => incident.name === name);

    if (assignedIncident) {
      const updatedAssignedEmergencies = [...assignedEmergencies, { name: assignedIncident.name, hero }];
      setAssignedEmergencies(updatedAssignedEmergencies);
      setUnassignedEmergencies(unassignedEmergencies.filter((emergency) => emergency !== name));
    } 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Central de Emergencia</h1>
      <Form
        onAddIncident={handleAddIncident}
        unassignedEmergencies={unassignedEmergencies}
        heroes={heroes}
        onAssignHero={handleAssignHero}
      />

      {/* Título para Emergencias sin asignar */}
      <h2 style={{ marginTop: '20px' }}>Emergencias sin asignar</h2>
      <TableI
        incidents={incidents}
        onDeleteIncident={handleDeleteIncident}
        onAssignHero={handleAssignHero}
      />

     
    </div>
  );
};

export default App;