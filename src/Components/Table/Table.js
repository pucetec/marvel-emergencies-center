import React, { useState } from 'react';
import {Button,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Dialog,DialogTitle,DialogContent,DialogActions,} from '@mui/material';
import DeleteButton from '../Button/DeleteButton';
import { useHeroes } from '../Contexts/Heroes';

const TableI = ({ incidents, onDeleteIncident, onAssignHero, onUpdateAssignedEmergencies }) => {
  const heroes = useHeroes();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIncidentIndex, setSelectedIncidentIndex] = useState(null);
  const [selectedHero, setSelectedHero] = useState(null);
  const [localAssignedEmergencies, setLocalAssignedEmergencies] = useState([]);

  const handleOpenModal = (index) => {
    setSelectedIncidentIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedIncidentIndex(null);
    setModalOpen(false);
    setSelectedHero(null);
  };

  const handleAssignHero = (hero) => {
    onAssignHero(selectedIncidentIndex, hero);
    const updatedEmergencies = [...localAssignedEmergencies, {
      ...incidents[selectedIncidentIndex],
      hero: hero,
    }];
    setLocalAssignedEmergencies(updatedEmergencies);
    onUpdateAssignedEmergencies(updatedEmergencies);
    handleCloseModal();
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Emergencia</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incidents.map((incident, index) => (
              <TableRow key={index}>
                <TableCell>{incident.name}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => handleOpenModal(index)}
                  >
                    Asignar Heroe
                  </Button>
                  <DeleteButton onConfirmDelete={() => onDeleteIncident(index)} />
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
                onClick={() => handleAssignHero(hero)}
                style={{ marginLeft: '10px' }}
              >
                Asignar
              </Button>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TableI;