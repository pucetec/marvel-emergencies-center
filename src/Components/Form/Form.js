
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Form = ({ onAddIncident }) => {
  const [incidentName, setIncidentName] = useState('');
  const [selectedHero, setSelectedHero] = useState('');

  const handleAddIncident = () => {
    if (incidentName && selectedHero) {
      onAddIncident({ name: incidentName, hero: selectedHero });
      setIncidentName('');
      setSelectedHero('');
    }
  };

  return (
    <div>
      <TextField
        label="Incidente"
        value={incidentName}
        onChange={(e) => setIncidentName(e.target.value)}
      />
      <FormControl>
        <InputLabel>Seleccionar Heroe</InputLabel>
        <Select
          value={selectedHero}
          onChange={(e) => setSelectedHero(e.target.value)}
        >

          <MenuItem value="SpiderMan">SpiderMan</MenuItem>
          <MenuItem value="Batman">Batman</MenuItem>
         
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleAddIncident}>
        Ingresar
      </Button>
    </div>
  );
};

export default Form;
