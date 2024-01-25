import logo from './logo.svg';
import './App.css';
import Tipografia from './common/Tipografia/Tipografia';
import Barra from './common/Barra/Barra';
import Boton from './common/Boton/Boton';
import Box from '@mui/material/Box';
import Tabla from './common/Tabla/Tabla';

function App() {
  return (
    <div className="App">
      <Tipografia texto={"Central de Emergencias"} variant={"h3"} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mt={2} // Ajusta según tu necesidad
      >
        <Tipografia texto={"Emergencia"} variant={"h6"} />
        <Barra label={" "} />
        <Boton texto={"Ingresar"} variant={"contained"} />
      </Box>

      <Tipografia texto={"Emergencias sin asignar"} variant={"h6"} />
      
      <Box
      maxWidth={300} // Ajusta aquí
      display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column" // Cambiado a columna para centrar la tabla debajo de los otros elementos
    textAlign={"center"}
    margin={"auto"}
  >

      
      <Tabla/>
      </Box>

    </div>
  );
}

export default App;
