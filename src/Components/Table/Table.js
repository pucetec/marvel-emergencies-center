
import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableI = ({ incidents, onDeleteIncident, onAssignHero }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Emergencia</TableCell>
            <TableCell>Heroe</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident, index) => (
            <TableRow key={index}>
              <TableCell>{incident.name}</TableCell>
              <TableCell>{incident.hero}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => onAssignHero(index)}>
                  Asignar Heroe
                </Button>
                <Button variant="outlined" onClick={() => onDeleteIncident(index)}>
                  Eliminar                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableI;
