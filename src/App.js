import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IncidentForm from './components/Molecule/IncidentForm.js';
import IncidentTable from './components/Molecule/IncidentTable.js';

function App() {
  const [incidents, setIncidents] = useState([]);

  const handleAddIncident = (newIncident) => {
    setIncidents([...incidents, newIncident]);
  };

  const handleDeleteIncident = (index) => {
    const updatedIncidents = [...incidents];
    updatedIncidents.splice(index, 1);
    setIncidents(updatedIncidents);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <IncidentForm onAddIncident={handleAddIncident} />
      <IncidentTable incidents={incidents} onDeleteIncident={handleDeleteIncident} />
    </Container>
  );
}

export default App;
