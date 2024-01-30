import "./App.css";
import { ProveedorDeContexto } from "./contexts/Contexto";
import Titulo from "../src/components/Titulo/Titulo";
import Ingreso from "./components/Ingreso/Ingreso";
import Asignamiento from "./components/Asignamiento/Asignamiento";


const App = () => {


  return (
    <ProveedorDeContexto>
      <div id="contenedor-general" style = {{ textAlign: "center" }}>
        <div id="parte-superior" >
          <Titulo />
          <label> <small> Después de ingresar la emergencia, click en [ 1 Héroe ] , y luego click en [ 2 Asignar ] </small> </label>
        </div>
        <div id="ingresos">
          <Ingreso />
        </div>
        <div id="asignaciones">
          <Asignamiento />
        </div>
      </div>
    </ProveedorDeContexto>
  );

};

export default App;
