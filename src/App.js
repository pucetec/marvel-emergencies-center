import React, { useState } from "react"; // Importar useState
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import CustomButton from "./common/Button";
import List from "./common/List";
import CustomTextField from "./common/TexField";
import Icon from "./common/Icon"; 
import CustomModal from "./common/Modal";
import MarvelComponent from "./common/MarvelComponent";
import Table from "./common/Table";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Corregir el uso de useState
  
  const handleTextFieldChange = (event) => {
    console.log("Valor del TextField:", event.target.value);
  };

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const emergenciasSinAsignar = [
    {
      text: "Emergencia 1 sin asignar",
      buttonText: "Botón 1",
      action: <Icon onClick={handleIconClick} />,
    },
    {
      text: "Emergencia 2 sin asignar",
      buttonText: "Botón 2",
      action: <Icon onClick={handleIconClick} />,
    },
    {
      text: "Emergencia 3 sin asignar",
      buttonText: "Botón 3",
      action: <Icon onClick={handleIconClick} />,
    },
  ];

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
          />
          <CustomButton>Ingresar</CustomButton>
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
          listItems={emergenciasSinAsignar.map((item) => (
            <CustomButton key={item.text}>{item.buttonText}</CustomButton>
          ))}
          open={isModalOpen}
          onClose={handleModalClose}
        >
          <MarvelComponent /> 
        </CustomModal>
      </Box>
    </div>
  );
}

export default App;
