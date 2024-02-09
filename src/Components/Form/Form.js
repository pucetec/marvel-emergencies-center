
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';




const Form = ({ onAddIncident }) => {const [incidentName, setIncidentName] = useState('');

  const handleAddIncident = () => {
    if (incidentName) {
      onAddIncident({ name: incidentName, hero: 'Sin asignar' });
      setIncidentName('');}
  };

  return (
    <div>
      <TextField
        label="Emergencia"
        value={incidentName}
        onChange={(e) => setIncidentName(e.target.value)}
      /> <Button variant="contained" onClick={handleAddIncident}>
        Ingresar
      </Button>
    </div>
  );
};

export default Form;
