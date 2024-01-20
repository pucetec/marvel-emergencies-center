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

function IncidenciaForm() {
  const [incidencia, setIncidencia] = useState("");
  const [incidenciasList, setIncidenciasList] = useState([]);
  const [contador, setContador] = useState(1);

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

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        CENTRAL DE EMERGENCIAS
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
            Asignar
          </Button>
        </Grid>
      </Grid>
      <h1>EMERGENCIAS SIN ASIGNAR</h1>
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
                {/* Agrega "Holaaa mundo" en la celda de "Emergencias" */}
                <TableCell>Rodo en Fake Stret 1234</TableCell>  
            </TableRow>
            
            ))}
          </TableBody>
          
        </Table>
      </TableContainer>
    </Container>
  );
}

export default IncidenciaForm;
