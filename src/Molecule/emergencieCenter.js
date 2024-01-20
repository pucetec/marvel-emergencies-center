import React from 'react';
import { Paper } from '@mui/material';
import MyTable from '../Atom/Table';
import TableCell from '../Atom/TableCell';
import MyButton from '../Atom/Button';
import TableRow from '@mui/material/TableRow'; 
import TableHead from '@mui/material/TableHead'; 
import TableBody from '@mui/material/TableBody'; 

const emergencieCenter = ({ incidents, onDeleteIncident }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      <MyTable>
        <TableHead>
          <TableRow>
            <TableCell>Nombre de Incidencia</TableCell>
            <TableCell>Policía</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident, index) => (
            <TableRow key={index}>
              <TableCell>{incident.name}</TableCell>
              <TableCell>{incident.police}</TableCell>
              <TableCell>
                <MyButton variant="outlined" color="error" onClick={() => onDeleteIncident(index)}>
                  Borrar
                </MyButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MyTable>
    </Paper>
  );
};

export default emergencieCenter;
