import Button from "./common/Button/Button";
import InputText from "./common/InputText/InputText";
import Typography from "./common/Typography/Typography";

function App() {
  return (
    <div>
      <div>
        <Typography level={"h1"}>Central de Emergencias</Typography>
      </div>
      <div>
        <label>Emergencia</label>
        <InputText placeholder={"emergencia"} />
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
          <tr>
            <td></td>
          </tr>
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
}

export default App;
