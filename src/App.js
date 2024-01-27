// App.js
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import CustomButton from "./common/Button";
import List from "./common/List"; // Importa el componente List
import CustomTextField from "./common/TexField";
import Icon from "./common/Icon"; //

function App() {
  const handleIngresarClick = () => {
    console.log("Botón 'Ingresar' clicado");
  };
  const currentTimestamnp = Date.now().toString();

  const handleTextFieldChange = (event) => {
    console.log("Valor del TextField:", event.target.value);
  };

  const emergenciasSinAsignar = [
    {
      text: "Emergencia 1 sin asignar",
      buttonText: "Botón 1",
      action: <Icon />,
    },
    {
      text: "Emergencia 2 sin asignar",
      buttonText: "Botón 2",
      action: <Icon />,
    },
    {
      text: "Emergencia 3 sin asignar",
      buttonText: "Botón 3",
      action: <Icon />,
    },
  ];

  const emergenciasAsignadas = [
    {
      text: "Emergencia 1 asignada",
      action: <CustomButton>sdffs</CustomButton>,
    },
    {
      text: "Emergencia 2 asignada",
      action: <CustomButton>sdffs</CustomButton>,
    },
    {
      text: "Emergencia 3 asignada",
      action: <CustomButton>sdffs</CustomButton>,
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
      </Box>
    </div>
  );
}

export default App;
