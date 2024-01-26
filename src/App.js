// App.js
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import CustomButton from "./common/Button";
import List from "./common/List"; // Importa el componente List
import CustomTextField from "./common/TexField";
import env from "react-dotenv";
import md5 from "md5";
import axios from "axios";

function App() {
  const handleIngresarClick = () => {
    console.log("Botón 'Ingresar' clicado");
  };
  const currentTimestamnp = Date.now().toString();

  const handleTextFieldChange = (event) => {
    console.log("Valor del TextField:", event.target.value);
  };

  // Define tus listas de elementos
  const emergenciasSinAsignar = [
    { text: "Emergencia 1 sin asignar" },
    { text: "Emergencia 2 sin asignar" },
    { text: "Emergencia 3 sin asignar" },
  ];

  const emergenciasAsignadas = [
    { text: "Emergencia 1 asignada" },
    { text: "Emergencia 2 asignada" },
    { text: "Emergencia 3 asignada" },
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
        {/* Agrega el componente List para Emergencias sin asignar */}
        <List items={emergenciasSinAsignar} withButtons={true} />
        <Typography variant="h5" gutterBottom>
          Emergencias asignadas
        </Typography>
        {/* Agrega el componente List para Emergencias asignadas */}
        <List items={emergenciasAsignadas} withButtons={true} />
      </Box>
    </div>
  );
}

export default App;
