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
import BasicModal from "./BasicModal";

function IncidenciaForm() {
  const [incidencia, setIncidencia] = useState("");
  const [incidenciasAsignadasList, setIncidenciasAsignadasList] = useState([]);
  const [incidenciasList, setIncidenciasList] = useState([]);
  const [contador, setContador] = useState(1);
  const [selectedHero, setSelectedHero] = useState("");
  

  const handleIncidenciaChange = (event) => {
    setIncidencia(event.target.value);
  };
  
  /*const handleAsignarHeroe = (id, selectedHero)=>{
    {incidenciasList.map((item) => (
      if(item.id === id){
        incidenciasList.item.hero = selectedHero;
      };
    ))}
     
  };*/

 
  const handleAsignarIncidenciaClick = () => {
    if (incidencia !== "") {
      const nuevaIncidencia = {
        id: contador,
        incidencia,
        hero: selectedHero,
      };
      setIncidenciasList([...incidenciasList, nuevaIncidencia]);
      setIncidencia("");
      setSelectedHero(""); // Reset selectedHero
      setContador(contador + 1);
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const handleEliminarClick = (id) => {
    const nuevaLista = incidenciasList.filter((item) => item.id !== id);
    setIncidenciasList(nuevaLista);
    if (nuevaLista.length == 0) {
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
            label="Ingrese la emergencia"
            value={incidencia}
            onChange={handleIncidenciaChange}
            fullWidth
          />
        </Grid>
    
        <Grid item xs={2}>
          <Button
            onClick={handleAsignarIncidenciaClick}
            variant="contained"
            color="primary"
          >
            {" "}
            Ingresar{" "}
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
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
                <TableCell>{item.incidencia}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                <BasicModal TextoModal={item.incidencia} setSelectedHero={setSelectedHero} />
                  
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleEliminarClick(item.id)}
                  >
                    Eliminar
                  </Button>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" gutterBottom>
        Emergencias Asignadas
      </Typography>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Emergencia</TableCell>
              <TableCell>Heroe</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incidenciasList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.incidencia}</TableCell>
                <TableCell>{item.hero = selectedHero}</TableCell>
                <TableCell>
                  <BasicModal TextoModal={item.incidencia} setSelectedHero={setSelectedHero} />
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleEliminarClick(item.id)}
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