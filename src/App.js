import "./App.css";
import { ProveedorDeContexto } from "./contexts/Contexto";
import Titulo from "../src/components/Titulo/Titulo";
import Ingreso from "../src/components/Ingreso/Ingreso";
import SubTitulo2 from "./components/SubTitulo2/SubTitulo2";


const App = () => {

  return (
    <ProveedorDeContexto>
      <div style = {{ textAlign: "center" }}>
        <Titulo />
        <Ingreso />
        <SubTitulo2 />
        <p><h1>Tabla 2 [Eliminar] [Reasignar]</h1></p>
      </div>
    </ProveedorDeContexto>
  );

};

export default App;
