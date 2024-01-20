import "./App.css";
import Typography from "./common/Typography/Typography";
import TextField from "./common/TextField/TextField";
import Button from "./common/Button/Button";

const App = () => {
  return (
    <>
      <div>
        <center>
          <Typography level={"h1"} children={"Central de Emergencias"} />
        </center>
      </div>
      <div>
        <label>Emergencia</label>
        <TextField
          label="Escribe una emergencia"
          variant="outlined"
        ></TextField>
        <Button variant={"contained"} value={"Asignar"}></Button>
      </div>
      <center>
        <Typography level={"h3"} children={"Emergencias sin asignar"} />
      </center>
      <div>
        <center>
          <Typography level={"h3"} children={"Emergencias Asignadas"} />
        </center>
      </div>
    </>
  );
};

export default App;
