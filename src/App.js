import Button from "./common/Button/Button";
import InputText from "./common/InputText/InputText";
import Typography from "./common/Typography/Typography";
import AssignIcon from "./common/Icons/AssignIcon";

const App = () => {
  const handleOpen = () => (setOpen = true);
  const { emergency, emergencyList, handleNewEmergency } =
    useEmergencyContext();

  return (
    <div>
      <div>
        <Typography level={"h1"}>Central de Emergencias</Typography>
      </div>
      <div>
        <label>Emergencia</label>
        <InputText value={emergency} placeholder={"emergencia"} />
      </div>
      <div>
        <Button value={"Ingresar"} />
      </div>
      <div>
        <Typography level={"h2"}>Emergencias sin asignar</Typography>
      </div>
      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Emergencia</th>
            <th>Acciones</th>
          </tr>
          {emergencyList.map((item, i) => {
            let counter = 1;
            <tr>
              <td>{(item.counter = counter++)}</td>
              <td>{item.emergency}</td>
              <td></td>
            </tr>;
          })}
        </table>
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
  );
};

export default App;
