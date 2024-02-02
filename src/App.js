import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import CustomButton from "./common/Button";
import List from "./common/List";
import CustomTextField from "./common/TexField";
import Icon from "./common/Icon";
import CustomModal from "./common/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emergencyText, setEmergencyText] = useState("");

  const handleTextFieldChange = (event) => {
    setEmergencyText(event.target.value);
  };

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleIngresarClick = () => {
    if (emergencyText.trim() !== "") {
      const newEmergency = {
        text: emergencyText,
        buttonText: "Ingresar",
        action: <Icon onClick={handleIconClick} />,
      };
      setEmergencyText("");
      setEmergenciasSinAsignar((prevEmergencias) => [
        ...prevEmergencias,
        newEmergency,
      ]);
    }
  };

  const [emergenciasSinAsignar, setEmergenciasSinAsignar] = useState([]);

  const emergenciasAsignadas = [
    {
      text: "Emergencia 1 asignada",
      action: <Icon onClick={handleIconClick} />,
    },
    {
      text: "Emergencia 2 asignada",
      action: <Icon onClick={handleIconClick} />,
    },
    {
      text: "Emergencia 3 asignada",
      action: <Icon onClick={handleIconClick} />,
    },
  ];

  const superheroes = [
    {
      text: "Spiderman",
    },
    {
      text: "Scarlet-Spider",
    },
    {
      text: "Superior-Spiderman",
    },
  ];
  const Enviar = [];
  //la emergencia que le doy click le guardo en un estado global, y cuando le doy a enviar ato las 2 cosas

  return (
    <div className="App">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>
          Central de emergencias
        </Typography>
        <Typography variant="h5" gutterBottom>
          Emergencia
          <CustomTextField
            label="Emergencia"
            onChange={handleTextFieldChange}
            value={emergencyText}
          />
          <CustomButton onClick={handleIngresarClick}>Ingresar</CustomButton>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Emergencias sin asignar
        </Typography>
        <List items={emergenciasSinAsignar} componentType="button" />
        <Typography variant="h5" gutterBottom>
          Emergencias asignadas
        </Typography>
        <List items={emergenciasAsignadas} componentType="icon" />

        <CustomModal
          title="Asigna tu super héroe"
          listItems={superheroes.map((superhero) => (
            <div key={superhero.text}>
              <Typography variant="h6" gutterBottom>
                {superhero.text}
              </Typography>
              <CustomButton>
                {superhero.buttonText}
                Enviar
              </CustomButton>
            </div>
          ))}
          open={isModalOpen}
          onClose={handleModalClose}
        />
      </Box>
    </div>
  );
}

export default App;
