import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import MyTable from '../Atom/Table';
import TableCell from '../Atom/TableCell';
import MyButton from '../Atom/Button';
import TableRow from '@mui/material/TableRow'; 
import TableHead from '@mui/material/TableHead'; 
import TableBody from '@mui/material/TableBody'; 
import axios from 'axios';
import md5 from 'md5';
import env from 'react-dotenv';

const GATEWAY = 'http://gateway.marvel.com/v1/public/comics?apikey=';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const fetchComicInfo = async (comicId) => {
  const currentTimestamp = Date.now().toString();
  const joinedKey = currentTimestamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
  const md5Key = md5(joinedKey);
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${env.PUBLIC_KEY}&ts=${currentTimestamp}&hash=${md5Key}`
  );
  return response.data?.data?.results[0] || null;
};

const IncidentTable = ({ incidents, onDeleteIncident }) => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComicData = async () => {
      const comicsData = await Promise.all(incidents.map((incident) => fetchComicInfo(incident.comicId)));
      setComics(comicsData);
    };

    fetchComicData();
  }, [incidents]);

  const handleOpen = (comic) => {
    console.log('Open modal for comic:', comic);
  };

  const handleClose = () => {
    console.log('Close modal');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <MyTable>
        <TableHead>
          <TableRow>
            <TableCell>Nombre de Emergencia</TableCell>
            <TableCell>SuperHeroe</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident, index) => (
            <TableRow key={index}>
              <TableCell>{incident.name}</TableCell>
              <TableCell>{comics[index]?.title || 'No asignado'}</TableCell>
              <TableCell>
                <MyButton variant="outlined" color="error" onClick={() => handleOpen(comics[index])}>
                  Detalles
                </MyButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MyTable>
    </Paper>
  );
};

export default IncidentTable;
