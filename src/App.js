import InputText from "./common/InputText/InputText";
import Typography from "./common/Typography/Typography";
import EmergencyContextProvider from "./context/EmergencyContext";
import AddEmergencyButton from "./common/Button/AddEmergencyButton";
import NotAssignedTable from "./components/tables/NotAssignedTable";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <EmergencyContextProvider>
      <div>
        <div>
          <Typography level={"h1"}>Central de Emergencias</Typography>
        </div>
        <div>
          <label>Emergencia</label>
          <InputText placeholder={"emergencia"} />
        </div>
        <div>
          <AddEmergencyButton value={"Ingresar"} />
        </div>
        <div>
          <Typography level={"h2"}>Emergencias sin asignar</Typography>
        </div>
        <div>
          <NotAssignedTable />
          <Modal />
        </div>
        <div>
          <Typography level={"h2"}>Emergencias Asignadas</Typography>
        </div>
        <div>
          <table>
            <tr>
              <th>#</th>
              <th>Emergencia</th>
              <th>Heroe</th>
              <th>Acciones</th>
            </tr>
          </table>
        </div>
      </div>
    </EmergencyContextProvider>
  );
};

export default App;
