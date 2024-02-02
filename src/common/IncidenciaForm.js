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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ButtonAsign from "./ButtonAsign";
import ButtonAsignH from "./ButtonAsignH";

function IncidenciaForm() {
  const [incidencia, setIncidencia] = useState("");
  const [incidenciasList, setIncidenciasList] = useState([]);
  const [contador, setContador] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [marvelData, setMarvelData] = useState(null);

  const handleIncidenciaChange = (event) => {
    setIncidencia(event.target.value);
  };

  const handleAsignarHeroeClick = async () => {
    try {
      const response = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=f39b8cbf694e51e2ae6d129d7a97c448`
      );
      const data = await response.json();
      console.log(data); 
      setMarvelData(data);
      setOpenDialog(true);
    } catch (error) {
      console.error("Error al obtener datos de Marvel:", error);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleAsignarClick = () => {
    if (incidencia !== "") {
      const nuevaIncidencia = {
        id: contador,
        incidencia,
      };
      setIncidenciasList([...incidenciasList, nuevaIncidencia]);
      setContador(contador + 1);
      setIncidencia("");
    }
  };

  const handleEliminarClick = (id) => {
    const nuevaLista = incidenciasList.filter((item) => item.id !== id);
    setIncidenciasList(nuevaLista);
    if (nuevaLista.length === 0) {
      setContador(1);
    }
  };
  const handleAsignarHeroeToEmergencia = () => {
    const nuevaIncidencia = {
      id: contador,
      incidencia: "IronMan", // Puedes ajustar esto según tus necesidades
    };
    setIncidenciasList([...incidenciasList, nuevaIncidencia]);
    setContador(contador + 1);
    handleDialogClose();
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
          <ButtonAsign
            onClick={handleAsignarClick}
            variant="contained"
            color="secondary"
          >
            Asignar
          </ButtonAsign>
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
                    style={{ marginRight: "8px", width: "100%" }}
                  >
                    Eliminar
                  </Button>
                  <ButtonAsignH
                    onClick={handleAsignarHeroeClick}
                    variant="contained"
                    color="secondary"
                    style={{ width: "100%" }}
                  >
                    AsignarH
                  </ButtonAsignH>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" gutterBottom>
      Emergencias Asignadas
    </Typography>
    <TableContainer style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Emergencia</TableCell>
            <TableCell>Heroe</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidenciasList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              {/* <TableCell>{item.incidencia}</TableCell> */}
              <TableCell>
                {/* <Button
                  onClick={() => handleEliminarClick(item.id)}
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: "8px", width: "100%" }}
                >
                  Eliminar
                </Button> */}
                {item.incidencia === "IronMan" && (
                  <ButtonAsignH
                    variant="contained"
                    color="secondary"
                    style={{ width: "100%" }}
                  >
                    AsignarH
                  </ButtonAsignH>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      {/* Dialog para mostrar cuando se presiona AsignarH */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
  <DialogTitle>Personajes de Marvel</DialogTitle>
  <DialogContent>
    {marvelData && marvelData.data && marvelData.data.results ? (
      marvelData.data.results.slice(0, 5).map((character) => (
        <Button
          key={character.id}
          variant="contained"
          color="secondary"
          style={{ marginBottom: 10, width: "100%" }}
          onClick={() => {
            console.log("Personaje seleccionado:", character.name);
            handleAsignarHeroeToEmergencia();
          }}
        >
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          {character.name}
        </Button>
      ))
    ) : (
      <Button
        variant="contained"
        color="secondary"
        style={{ marginBottom: 10, width: "100%" }}
        onClick={() => {
          console.log("Personaje seleccionado: IronMan");
          handleAsignarHeroeToEmergencia();
        }}
      >
        <Typography variant="h4" gutterBottom>
          IronMan
        </Typography>
      </Button>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleDialogClose} color="primary">
      Cerrar
    </Button>
  </DialogActions>
</Dialog>
    </Container>
  );
}

export default IncidenciaForm;
