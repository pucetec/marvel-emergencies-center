import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from '@mui/material';
import DeleteButton from '../Button/DeleteButton';
import AssignedEmergenciesTable from './AssignedEmergenciesTable';


const TableI = ({ incidents, onDeleteIncident, onAssignHero }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIncidentIndex, setSelectedIncidentIndex] = useState(null);
  const [assignedEmergencies, setAssignedEmergencies] = useState([]);


  const handleOpenModal = (index) => {
    setSelectedIncidentIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedIncidentIndex(null);
    setModalOpen(false);
  };

  const handleAssignHero = (hero) => {
    onAssignHero(selectedIncidentIndex, hero); // Primero, llama a la función onAssignHero
    const updatedEmergencies = [...assignedEmergencies, {
      ...incidents[selectedIncidentIndex],
      hero: hero,
    }];
    setAssignedEmergencies(updatedEmergencies); // Luego, actualiza el estado con la nueva asignación
    handleCloseModal(); // Finalmente, cierra el modal
  

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
                    Asignar Héroe
                  </Button>
                  <DeleteButton onConfirmDelete={() => onDeleteIncident(index)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {/* Modal para asignar héroe */}
      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogTitle>Seleccionar Héroe</DialogTitle>
        <DialogContent>
          <Select onChange={(e) => handleAssignHero(e.target.value)}>
            {/* Lista de héroes */}
            <MenuItem value="SpiderMan">SpiderMan</MenuItem>
            <MenuItem value="Batman">Batman</MenuItem>
            {/* Agrega más héroes según sea necesario */}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
        </DialogActions>
      </Dialog>


      <h2 style={{ marginTop: '20px' }}>Emergencias asignadas</h2>
      <AssignedEmergenciesTable assignedEmergencies={assignedEmergencies} />
    </>
  );
};

export default TableI;