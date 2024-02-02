import React, { useState } from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Dialog,DialogTitle,DialogContent,DialogActions,
} from '@mui/material';
import DeleteButton from '../Button/DeleteButton';
import { useHeroes } from '../Contexts/Heroes';

const AssignedEmergenciesTable = ({ assignedEmergencies, onDeleteIncident, onReassignHero }) => {
  const heroes = useHeroes();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIncidentIndex, setSelectedIncidentIndex] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedIncidentIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedIncidentIndex(null);
    setModalOpen(false);
  };

  const handleReassignHero = (hero) => {
    onReassignHero(selectedIncidentIndex, hero);
    handleCloseModal();
  };

  const handleDeleteIncident = () => {
    onDeleteIncident(selectedIncidentIndex);
    handleCloseModal();
  };

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Emergencia</TableCell>
              <TableCell>Heroe</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignedEmergencies.map((emergency, index) => (
              <TableRow key={index}>
                <TableCell>{emergency.name}</TableCell>
                <TableCell>{emergency.hero}</TableCell>
                <TableCell>
                  <DeleteButton onConfirmDelete={handleDeleteIncident} />
                  <Button
                    variant="outlined"
                    onClick={() => handleOpenModal(index)}
                    style={{ marginLeft: '10px' }}
                  >
                    Reasignar Heroe
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Seleccionar Heroe</DialogTitle>
        <DialogContent>
          {heroes.map((hero) => (
            <div key={hero} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div>{hero}</div>
              <Button
                variant="outlined"
                onClick={() => handleReassignHero(hero)}
                style={{ marginLeft: '10px' }}
              >
                Asignar
              </Button>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={() => handleReassignHero()} color="primary">
            Asignar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AssignedEmergenciesTable;
