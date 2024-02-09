import { useState } from "react";
import Table from "./common/Table";
import axios from "axios";
import md5 from "md5";
import env from "react-dotenv";
import {
  Box,
  Button,
  Container,
  Modal,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const GATEWAY = "http://gateway.marvel.com/v1/public/comics?apikey=";

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

function App() {
  const [emergencyInput, setEmergencyInput] = useState("");
  const [emergenciesSinAsignar, setEmergenciesSinAsignar] = useState([
    "Robo en Fake street 1234",
  ]);
  const [emergenciesAsignadas, setEmergenciesAsignadas] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState("Spider Man");
  const [selectedAssignedEmergency, setSelectedAssignedEmergency] =
    useState(null);

  const bringMarvelInfo = async () => {
    const currentTimestamp = Date.now().toString();
    const joinedKey = currentTimestamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
    const md5Key = md5(joinedKey);
    const response = await axios.get(
      GATEWAY + env.PUBLIC_KEY + "&ts=" + currentTimestamp + "&hash=" + md5Key,
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    console.log({ response });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedAssignedEmergency(null);
  };

  const handleEmergencyInputChange = (event) => {
    setEmergencyInput(event.target.value);
  };

  const handleIngresar = () => {
    if (emergencyInput.trim() !== "") {
      setEmergenciesSinAsignar([...emergenciesSinAsignar, emergencyInput]);
      setEmergencyInput("");
    }
  };

  const handleAsignar = () => {
    if (emergenciesSinAsignar.length > 0) {
      handleOpen();
    }
  };

  const handleConfirmAsignar = () => {
    if (emergenciesSinAsignar.length > 0) {
      const emergency = emergenciesSinAsignar[0];

      const existingAssignment = emergenciesAsignadas.find(
        (item) => item.emergency === emergency
      );

      if (existingAssignment) {
        existingAssignment.hero = selectedHero;
      } else {
        setEmergenciesAsignadas([
          ...emergenciesAsignadas,
          { hero: selectedHero, emergency },
        ]);
      }

      setEmergenciesSinAsignar(emergenciesSinAsignar.slice(1));

      handleClose();
    }
  };

  const handleEliminar = (index) => {
    const isConfirmed = window.confirm("¿Estás seguro de eliminarlo?");
    if (isConfirmed) {
      const newEmergencies = [...emergenciesSinAsignar];
      newEmergencies.splice(index, 1);
      setEmergenciesSinAsignar(newEmergencies);
      alert("Eliminado correctamente");
    } else {
      alert("Operación cancelada");
    }
  };

  const handleEliminarAsignada = (index) => {
    const isConfirmed = window.confirm("¿Estás seguro de eliminarlo?");
    if (isConfirmed) {
      const newEmergenciesAsignadas = [...emergenciesAsignadas];
      newEmergenciesAsignadas.splice(index, 1);
      setEmergenciesAsignadas(newEmergenciesAsignadas);
      alert("Eliminado correctamente");
    } else {
      alert("Operación cancelada");
    }
  };

  const handleHeroSelection = (event) => {
    setSelectedHero(event.target.value);
  };

  const handleReasignar = (index) => {
    const assignedEmergency = emergenciesAsignadas[index];
    setSelectedAssignedEmergency(assignedEmergency);
    handleOpen();
  };

  const handleConfirmReasignar = () => {
    if (selectedAssignedEmergency) {
      const { hero, emergency } = selectedAssignedEmergency;
      const newEmergenciesAsignadas = emergenciesAsignadas.map(
        (assignedEmergency) => {
          if (assignedEmergency === selectedAssignedEmergency) {
            return { hero: selectedHero, emergency };
          }
          return assignedEmergency;
        }
      );
      setEmergenciesAsignadas(newEmergenciesAsignadas);
      handleClose();
    }
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" align="center" gutterBottom>
          Central de Emergencias
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            style={{ marginRight: "20px", marginTop: 50 }}
          >
            Emergencia
          </Typography>
          <TextField
            label="Nueva Emergencia"
            variant="outlined"
            fullWidth
            style={{ marginTop: 50 }}
            value={emergencyInput}
            onChange={handleEmergencyInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleIngresar}
            style={{ marginLeft: 30, marginTop: 50 }}
          >
            Ingresar
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h6"
            style={{ marginLeft: 170, fontWeight: "bold", marginTop: 80 }}
          >
            Emergencias sin asignar
          </Typography>
          <Table
            headers={["#", "Emergencia", "Acciones"]}
            bodyRows={emergenciesSinAsignar.map((emergency, index) => [
              index + 1,
              emergency,
              <div>
                <Button onClick={handleAsignar}>Asignar</Button>
                <Button onClick={() => handleEliminar(index)}>Eliminar</Button>
              </div>,
            ])}
          />
        </Box>
        <Box>
          <Typography
            variant="h6"
            style={{ marginLeft: 170, fontWeight: "bold", marginTop: 80 }}
          >
            Emergencias asignadas
          </Typography>
          <Table
            headers={["#", "Héroe", "Emergencia", "Acciones"]}
            bodyRows={emergenciesAsignadas.map((assignedEmergency, index) => [
              index + 1,
              assignedEmergency.hero,
              assignedEmergency.emergency,
              <div>
                <Button onClick={() => handleEliminarAsignada(index)}>
                  Eliminar
                </Button>
                <Button onClick={() => handleReasignar(index)}>
                  Reasignar
                </Button>
              </div>,
            ])}
          />
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              align="center"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
              Asigna tu súper héroe
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">Héroe</FormLabel>
              <RadioGroup
                aria-label="hero"
                name="hero"
                value={selectedHero}
                onChange={handleHeroSelection}
              >
                <FormControlLabel
                  value="Spider Man"
                  control={<Radio />}
                  label="Spider Man"
                />
                <FormControlLabel
                  value="Ironman"
                  control={<Radio />}
                  label="Ironman"
                />
                <FormControlLabel
                  value="Thor"
                  control={<Radio />}
                  label="Thor"
                />
                <FormControlLabel
                  value="Ant Man"
                  control={<Radio />}
                  label="Ant Man"
                />
                <FormControlLabel
                  value="Hulk"
                  control={<Radio />}
                  label="Hulk"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={
                selectedAssignedEmergency
                  ? handleConfirmReasignar
                  : handleConfirmAsignar
              }
              style={{ marginTop: 16 }}
            >
              {selectedAssignedEmergency ? "Reasignar" : "Asignar"}
            </Button>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
}

export default App;
