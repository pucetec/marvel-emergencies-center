import React, { useState } from "react";
import Table from "./common/Table/Table";
import { Box, Button, Container, Grid, Modal, Paper, Typography, TextField } from "@mui/material";
import { SuperheroesProvider, useSuperheroesContext } from "./common/Contextos/SuperheroesContext";

// Estilos y estilos de botones y secciones
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  marginTop: 10,
};

const sectionStyle = {
  marginBottom: 20,
  padding: 20,
};

// Componente funcional para mostrar las emergencias asignadas
function AssignedEmergenciesList({ emergencies, onReassignEmergency, onDeleteEmergency }) {
  return (
    <Paper elevation={3} style={sectionStyle}>
      {/* Título de Emergencias asignadas */}
      <Typography variant="h5"><strong>Emergencias asignadas</strong></Typography>
      {emergencies.map((assigned, index) => (
        // Detalles de cada emergencia asignada
        <div key={`assigned-emergency-${index}`} style={{ marginBottom: 10 }}>
          <Typography variant="body1" component="div">
            {/* Detalles de la emergencia: número, superhéroe y acciones de reasignar y eliminar */}
            <strong>Emergencia {index + 1}:</strong> {assigned.superhero} - {assigned.emergency}
            <Button onClick={() => onReassignEmergency(index)} variant="outlined" color="secondary" style={{ marginLeft: 10 }}>
              Reasignar
            </Button>
            <Button onClick={() => onDeleteEmergency(index)} variant="outlined" color="secondary" style={{ marginLeft: 10 }}>
              Eliminar
            </Button>
          </Typography>
        </div>
      ))}
    </Paper>
  );
}

// Componente funcional para el modal de asignación de superhéroes
function EmergencyAssignmentModal({ onAssignSuperhero, open, handleClose }) {
  const { superheroesList } = useSuperheroesContext();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* Contenido del modal */}
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Asigna Tu Super Héroe
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <ol>
            {/* Lista de superhéroes con botones de asignar */}
            {superheroesList.map((superhero, index) => (
              <li key={`superhero-${index}`}>
                {superhero}{" "}
                <Button onClick={() => onAssignSuperhero(superhero)} variant="contained" color="primary" style={buttonStyle}>
                  Asignar
                </Button>
              </li>
            ))}
          </ol>
        </Typography>
      </Box>
    </Modal>
  );
}

function App() {
  // Estados para manejar emergencias asignadas, modal y valores de entrada
  const [assignedEmergencies, setAssignedEmergencies] = useState([]);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [emergenciesToAssign, setEmergenciesToAssign] = useState([]);

  // Funciones para abrir/cerrar modal y manejar asignaciones/desasignaciones
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAssignButton = (emergency) => {
    setInputValue(emergency);
    handleOpen();
  };

  const handleAssignSuperhero = (superhero) => {
    if (inputValue) {
      // Agregar nueva emergencia asignada y filtrar emergencias por asignar
      setAssignedEmergencies([...assignedEmergencies, { superhero, emergency: inputValue }]);
      setEmergenciesToAssign(emergenciesToAssign.filter((emergency) => emergency !== inputValue));
    }
    handleClose();
  };

  const handleReassignEmergency = (index) => {
    // Reasignar emergencia según el índice
    const updatedEmergencies = [...assignedEmergencies];
    updatedEmergencies.splice(index, 1);
    setAssignedEmergencies(updatedEmergencies);

    // Abrir el modal después de reasignar
    handleOpen();
  };

  const handleDeleteEmergency = (index) => {
    // Eliminar emergencia según el índice
    const updatedEmergencies = [...assignedEmergencies];
    updatedEmergencies.splice(index, 1);
    setAssignedEmergencies(updatedEmergencies);
  };

  const handleInputChange = (event) => {
    // Manejar cambios en el campo de entrada
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    // Agregar nueva emergencia por asignar y limpiar el campo de entrada
    setEmergenciesToAssign([inputValue, ...emergenciesToAssign]);
    setInputValue("");
  };

  return (
    <Container maxWidth="md">
      {/* Encabezado de la aplicación */}
      <h1>Central de Emergencias Marvel</h1>
      {/* Grid para Emergencias sin asignar */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={sectionStyle}>
            {/* Título de Emergencias sin asignar */}
            <Typography variant="h5">
              <strong>Emergencias sin asignar</strong>
            </Typography>
            {/* Campo de entrada, botón de ingreso y tabla de emergencias por asignar */}
            <TextField
              label="Ingresar Emergencia"
              variant="outlined"
              fullWidth
              value={inputValue}
              onChange={handleInputChange}
              style={{ marginTop: 15, marginBottom: 10 }}
            />
            <Button variant="contained" color="primary" onClick={handleInputSubmit} style={buttonStyle}>
              Ingresar
            </Button>
            <Table
              headers={["#", "Emergencia", "Acciones"]}
              bodyRows={emergenciesToAssign.map((emergency, index) => [
                index + 1,
                // Número de emergencia en negrita, detalles de la emergencia y botón de asignar
                <strong>{`Emergencia ${index + 1}: `}</strong>,
                `${emergency}`,
                <div key={`assignButtonContainer-${index}`}>
                  <Button
                    key={`assignButton-${index}`}
                    variant="contained"
                    color="primary"
                    onClick={() => handleAssignButton(emergency)}
                    style={buttonStyle}
                  >
                    Asignar
                  </Button>
                  <span style={{ marginLeft: "10px" }}></span>
                </div>,
              ])}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Grid para Emergencias asignadas */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {/* Mostrar la lista de emergencias asignadas */}
          <AssignedEmergenciesList
            emergencies={assignedEmergencies}
            onReassignEmergency={handleReassignEmergency}
            onDeleteEmergency={handleDeleteEmergency}
          />
        </Grid>
      </Grid>

      {/* Modal de asignación de superhéroes */}
      <EmergencyAssignmentModal onAssignSuperhero={handleAssignSuperhero} open={open} handleClose={handleClose} />
    </Container>
  );
}

// Componente que envuelve la aplicación con el contexto de superhéroes
function AppWithContext() {
  return (
    <SuperheroesProvider>
      <App />
    </SuperheroesProvider>
  );
}

// Exportar el componente principal
export default AppWithContext;
