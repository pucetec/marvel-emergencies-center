import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import CustomButton from "./common/Button";
import TextField from "./common/TextField";

function App() {
  const handleIngresarClick = () => {
    console.log("Botón 'Ingresar' clicado");
  };
  const handleTextFieldChange = (event) => {
    console.log("Valor del TextField:", event.target.value);
  };
  return (
    <div className="App">
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>
          Central de emergencias
        </Typography>
        <Typography variant="h5" gutterBottom>
          Emergencia
          <TextField label="Emergencia" onChange={handleTextFieldChange} />
          <CustomButton onClick={handleIngresarClick}>Ingresar</CustomButton>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Emergencias sin asignar
        </Typography>
        <Typography variant="h5" gutterBottom>
          Emergencias asignadas
        </Typography>
      </Box>
    </div>
  );
}

export default App;
