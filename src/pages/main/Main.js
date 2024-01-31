import Tipografia from "../../common/Tipografia/Tipografia";
import Barra from "../../common/Barra/Barra";
import Boton from "../../common/Boton/Boton";
import Box from "@mui/material/Box";
import Tabla from "../../common/Tabla/Tabla";
import {
  EmergencyProvider,
  useEmergency,
} from "../../context/EmergencyContext/EmergencyContext";
import { useState } from "react";

const Main = () => {
  const { addEmergency } = useEmergency();
  const [emergency, setEmergency] = useState("");
  let count = 1;
  const handleAddEmergency = () => {
    const number = count++;
    const description = emergency;

    addEmergency(number, description);
  };
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
        <Barra onChange={(e) => setEmergency(e.target.value)} label={" "} />
        <Boton
          texto={"Ingresar"}
          onClick={handleAddEmergency}
          variant={"contained"}
        />
      </Box>

      <Tipografia texto={"Emergencias sin asignar"} variant={"h6"} />

      <Box
        maxWidth={900} // Ajusta aquí
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column" // Cambiado a columna para centrar la tabla debajo de los otros elementos
        textAlign={"center"}
        margin={"auto"}
      >
        <Tabla />
      </Box>
    </div>
  );
};
export default Main;
