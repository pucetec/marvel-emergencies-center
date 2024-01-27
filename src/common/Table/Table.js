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
import BasicModal from "./Modal/Modal";

function prueba() {
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
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h3">Emergencias sin asignar</Typography>
          <Table
            headers={["#", "Emergencia", "Acciones"]}
            bodyRows={[
              "1",
              "Robo en Fake street 1234",
              <Button onClick={handleOpen}>Asignar</Button>,
            ]}
          />
        </Box>
        <Box>
          <Typography variant="h3">Emergencias asignadas</Typography>
          <Table
            headers={["#", "Nombre", "Asignar", "2", "34324"]}
            bodyRows={["1", "Spiderman", "boton", 1, 2]}
          />
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Container>
    );
  };
}
export default prueba;
