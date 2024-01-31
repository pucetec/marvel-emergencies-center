import React, { useState, useEffect } from 'react';
import { Paper, Grid } from '@mui/material';
import MyButton from '../Atom/Button';
import Input from '../Atom/Input';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import md5 from 'md5';
import env from 'react-dotenv';

const GATEWAY = 'http://gateway.marvel.com/v1/public/comics?apikey=';

const fetchComics = async () => {
  const currentTimestamp = Date.now().toString();
  const joinedKey = currentTimestamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
  const md5Key = md5(joinedKey);
  const response = await axios.get(
    `${GATEWAY}${env.PUBLIC_KEY}&ts=${currentTimestamp}&hash=${md5Key}`
  );
  return response.data?.data?.results || [];
};

const IncidentForm = ({ onAddIncident }) => {
  const [incidentName, setIncidentName] = useState('');
  const [selectedComic, setSelectedComic] = useState('');
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComicData = async () => {
      const comicsData = await fetchComics();
      setComics(comicsData);
    };

    fetchComicData();
  }, []);

  const handleAddIncident = () => {
    if (incidentName && selectedComic) {
      onAddIncident({ name: incidentName, comicId: selectedComic });
      setIncidentName('');
      setSelectedComic('');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <h1>Manejo de incidencias</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Input
            label="Nombre de emergencia"
            fullWidth
            value={incidentName}
            onChange={(e) => setIncidentName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            label="Seleccionar superheroe"
            fullWidth
            value={selectedComic}
            onChange={(event) => setSelectedComic(event.target.value)}
            select
          >
            {comics.map((comic) => (
              <MenuItem key={comic.id} value={comic.id}>
                {comic.title}
              </MenuItem>
            ))}
          </Input>
        </Grid>
        <Grid item xs={12}>
          <MyButton
            variant="contained"
            onClick={handleAddIncident}
            style={{ marginLeft: 'auto', display: 'block' }}
          >
            Ingresar
          </MyButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default IncidentForm;
