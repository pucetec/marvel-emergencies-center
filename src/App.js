import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import Titulo from "../src/components/Titulo/Titulo";
import Ingreso from "../src/components/Ingreso/Ingreso";
import SubTitulo from "../src/components/SubTitulo/SubTitulo";


const App = () => {

  return (
    <AuthContextProvider>
      <div style = {{ textAlign: "center" }}>

        <Titulo />
        <Ingreso />
        <SubTitulo />

        <p><h1>Tabla 1 [Ingresar] [Eliminar]</h1></p>
        <p><h1>Emergencias Asignadas (Tipografia)</h1></p>
        <p><h1>Tabla 2 [Eliminar] [Reasignar]</h1></p>
      </div>
    </AuthContextProvider>
  );

};

export default App;

