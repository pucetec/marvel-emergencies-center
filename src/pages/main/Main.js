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
import TablaA from "../../common/Tabla/TablaA";

let count = 1;
const Main = () => {
  const { addEmergency } = useEmergency();
  const [emergency, setEmergency] = useState("");
  
  const handleAddEmergency = () => {
    const number = count;
    count++;
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
        mt={2} 
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
        maxWidth={900} 
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column" 
        textAlign={"center"}
        margin={"auto"}
      >
        <Tabla />
      </Box>
      <Tipografia texto={"Emergencias asignadas"} variant={"h6"} />
      <Box
        maxWidth={900} 
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column" 
        textAlign={"center"}
        margin={"auto"}
      >
        <TablaA/>
      </Box>
    </div>
  );
};
export default Main;
