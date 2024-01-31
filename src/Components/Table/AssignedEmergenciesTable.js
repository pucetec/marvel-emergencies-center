// AssignedEmergenciesTable.js
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const AssignedEmergenciesTable = ({ assignedEmergencies }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Emergencia</TableCell>
            <TableCell>Heroe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assignedEmergencies.map((emergency, index) => (
            <TableRow key={index}>
              <TableCell>{emergency.name}</TableCell>
              <TableCell>{emergency.hero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AssignedEmergenciesTable;
