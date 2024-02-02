import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Delete as DeleteIcon, AddCircle as AddCircleIcon } from '@mui/icons-material';
import SimpleModal from "./SimpleModal";

function IncidenciaForm() {
  const [incidencia, setIncidencia] = useState("");
  const [incidenciasList, setIncidenciasList] = useState([]);
  const [contador, setContador] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const handleIncidenciaChange = (event) => {
    setIncidencia(event.target.value);
  };

  const handleAsignarClick = () => {
    if (incidencia !== "") {
      const nuevaIncidencia = {
        id: contador,
        incidencia,
      };
      setIncidenciasList([...incidenciasList, nuevaIncidencia]);
      setIncidencia("");
      setContador(contador + 1);
    }
  };

  const handleEliminarClick = (id) => {
    const nuevaLista = incidenciasList.filter((item) => item.id !== id);
    setIncidenciasList(nuevaLista);
    if (nuevaLista.length === 0) {
      setContador(1);
    }
  };

  const handleAddCircleClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleHeroAssignment = (selectedHero) => {
    const updatedList = incidenciasList.map((item) =>
      item.id === selectedHero.id
        ? {
            ...item,
            hero: selectedHero.incidencia,
            asignaciones: (item.asignaciones || 0) + 1,
          }
        : item
    );
    setIncidenciasList(updatedList);
    setModalOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        <h1>CENTRAL DE EMERGENCIAS</h1>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle1">EMERGENCIAS:</Typography>
          <TextField
            label="Ingrese la incidencia"
            value={incidencia}
            onChange={handleIncidenciaChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={handleAsignarClick}
            variant="contained"
            color="primary"
          >
            INGRESAR
          </Button>
        </Grid>
      </Grid>
      <h4>EMERGENCIAS SIN ASIGNAR</h4>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Emergencias</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incidenciasList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.incidencia}</TableCell>
                <TableCell>
                  <AddCircleIcon
                    onClick={handleAddCircleClick}
                    style={{ cursor: "pointer", marginRight: "5px" }}
                  />
                  <DeleteIcon
                    onClick={() => handleEliminarClick(item.id)}
                    style={{ cursor: "pointer" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h4>EMERGENCIAS ASIGNADAS</h4>
      <SimpleModal
        modal={modalOpen}
        close={handleCloseModal}
        assignHero={handleHeroAssignment}
      />
      <TableContainer style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Emergencias</TableCell>
              <TableCell>Héroes</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incidenciasList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.incidencia}</TableCell>
                <TableCell>{item.hero || 'No asignado'}</TableCell>
                <TableCell>
                  <DeleteIcon
                    onClick={() => handleEliminarClick(item.id)}
                    style={{ cursor: "pointer" }}
                  />
                  <AddCircleIcon
                    onClick={() => handleAddCircleClick(item)}
                    style={{ cursor: "pointer", marginRight: "5px" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default IncidenciaForm;