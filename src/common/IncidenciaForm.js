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
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import NestedModal from "./Modal/Modal";

function IncidenciaForm() {
  const [incidencia, setIncidencia] = useState("");
  const [policia, setPolicia] = useState("");
  const [incidenciasList, setIncidenciasList] = useState([]);
  const [contador, setContador] = useState(1);

  const handleIncidenciaChange = (event) => {
    setIncidencia(event.target.value);
  };

  const handlePoliciaChange = (event) => {
    setPolicia(event.target.value);
  };

  const handleAsignarClick = () => {
    if (incidencia !== "") {
      const nuevaIncidencia = {
        id: contador,
        incidencia,
        policia,
      };
      setIncidenciasList([...incidenciasList, nuevaIncidencia]);
      setIncidencia("");
      setPolicia("");
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
  const SimplePopper = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
      <div>
        <button aria-describedby={id} type="button" onClick={handleClick}>
          Toggle Popper
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Popper>
      </div>
    );
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
        {/*
        <Grid item xs={3}>
          <Typography variant="subtitle1">Policía:</Typography>
          <Select
            value={policia}
            onChange={handlePoliciaChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>
              Seleccione Policía
            </MenuItem>
            <MenuItem value={"Policía 1"}>Policía 1</MenuItem>
            <MenuItem value={"Policía 2"}>Policía 2</MenuItem>
            <MenuItem value={"Policía 3"}>Policía 3</MenuItem>
          </Select>
        </Grid>
  */}
        <Grid item xs={2}>
          <Button
            onClick={handleAsignarClick}
            variant="contained"
            color="primary"
          >
            {" "}
            Asignar{" "}
          </Button>
        </Grid>
      </Grid>
      <TableContainer style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Emergencia</TableCell>
              {/*
              <TableCell>Policía</TableCell>
              */}
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incidenciasList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.incidencia}</TableCell>
                {/* </TableRow>TableCell>{item.policia}</TableCell> */}
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleEliminarClick(item.id)}
                  >
                    Eliminar
                  </Button>
                  <NestedModal />
                  {/*
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => SimplePopper()}
                    id={"simple-popper"}
                  >
                    Asignar
                  </Button>
                  */}
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
