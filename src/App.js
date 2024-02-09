import React, { useState } from 'react';
import Form from './Components/Form/Form';
import TableI from './Components/Table/Table';
import env from "react-dotenv";
import axios from 'axios';
import md5 from 'md5';
import { HeroesProvider } from './Components/Contexts/Heroes';
import AssignedEmergenciesTable from './Components/Table/AssignedEmergenciesTable';

const App = () => {
  const [incidents, setIncidents] = useState([]);
  const [unassignedEmergencies, setUnassignedEmergencies] = useState([]);

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

  const handleAssignHero = (index, hero) => {
    const assignedIncident = incidents.find(incident => incident.name === unassignedEmergencies[index]);

    if (assignedIncident) {
      const updatedAssignedEmergencies = [...assignedEmergencies, { name: assignedIncident.name, hero }];
      setAssignedEmergencies(updatedAssignedEmergencies);
      setUnassignedEmergencies(unassignedEmergencies.filter((emergency) => emergency !== assignedIncident.name));
    }
  };

  const handleDeleteIncidentTableI = (index) => {
    const updatedAssignedEmergencies = [...assignedEmergencies];
    updatedAssignedEmergencies.splice(index, 1);
    setAssignedEmergencies(updatedAssignedEmergencies);
  };

  const handleReassignHero = (index, hero) => {
    
    const updatedAssignedEmergencies = [...assignedEmergencies];
    updatedAssignedEmergencies[index].hero = hero;
    setAssignedEmergencies(updatedAssignedEmergencies);
  };

  return (
    <HeroesProvider>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ marginBottom: '20px' }}>Central de Emergencia</h1>
        <Form
          onAddIncident={handleAddIncident}
          unassignedEmergencies={unassignedEmergencies}
          onAssignHero={handleAssignHero}
        />

        <h2 style={{ marginTop: '20px' }}>Emergencias</h2>
        <TableI
          incidents={incidents}
          onDeleteIncident={handleDeleteIncident}
          onAssignHero={handleAssignHero}
          onUpdateAssignedEmergencies={setAssignedEmergencies}
        />

        <h2 style={{ marginTop: '20px' }}>Emergencias asignadas</h2>
        <AssignedEmergenciesTable
          assignedEmergencies={assignedEmergencies}
          onDeleteIncident={handleDeleteIncidentTableI}
          onReassignHero={handleReassignHero}
        />
      </div>
    </HeroesProvider>
  );
};

export default App;