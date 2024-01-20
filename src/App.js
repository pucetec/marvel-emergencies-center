import logo from "./logo.svg";
import "./App.css";
import Typography from "./common/Typography/Typography";
import TextField from "./common/TextField/TextFiel";
import Button from "./common/Button/Button";
import { useState } from "react";

const App = () => {
  return (
    <>
      <center>
        <Typography level={"h1"} children={"Emergy Center"} />
      </center>
      <div>
        <label>Emergencia</label>
        <TextField label="Cual es tu emergencia"></TextField>
        <Button variant={"Text"} value={"Asignar emergencia"}></Button>
      </div>
      <div>
        <Typography level={"h3"} children={"unassigned emergencies"} />
      </div>
      <div>
        <Typography level={"h3"} children={"assigned emergencies"} />
      </div>
    </>
  );
};

export default App;
