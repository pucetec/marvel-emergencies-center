import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ButtonAsign from "./ButtonAsign";

function IncidenciaForm() {
  const [incidencia, setIncidencia] = useState("");
  const [policia] = useState("");
  const [incidenciasList, setIncidenciasList] = useState([]);
  const [contador, setContador] = useState(1);

  const handleIncidenciaChange = (event) => {
    setIncidencia(event.target.value);
  };

  const handleAsignarClick = () => {
    if (incidencia !== "" && policia !== "") {
      const nuevaIncidencia = {
        id: contador,
        incidencia,
      };
      setIncidenciasList([...incidenciasList, nuevaIncidencia]);
      setContador(contador + 1);
      setIncidencia(""); // Limpiar el campo después de agregar la incidencia
    }
  };

  const handleEliminarClick = (id) => {
    const nuevaLista = incidenciasList.filter((item) => item.id !== id);
    setIncidenciasList(nuevaLista);
    if (nuevaLista.length === 0) {
      setContador(1);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Central de Emergencias
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="subtitle1">Emergencia:</Typography>
          <TextField
            label="Ingrese la incidencia"
            value={incidencia}
            onChange={handleIncidenciaChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <ButtonAsign />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Emergencias sin Asignar
      </Typography>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Emergencia</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incidenciasList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.incidencia}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleEliminarClick(item.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Eliminar
                  </Button>
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
