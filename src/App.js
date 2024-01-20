import React from "react";
import './App.css'
import InputText from "./common/InputText/InputText";
import ListBox from "./common/ListBox/ListBox";
import TapButton from "./common/TapButton/TapButton";
import Grid from "./common/Grid/Grid";
import { useState } from "react";

function App() {
  const list = [
    { label: "Thor" },
    { label: "Iron Man" },
    { label: "Spider Man" }
  ];

  const createData = (id, incidencia, superHeroe, acciones) => {
    return { id, incidencia, superHeroe, acciones };
  };

  const [rows, setRows] = useState([]);
  const [id, setId] = useState(1);
  const [incidencia, setIncidencia] = useState('');
  const [superHeroe, setSuperHeroe] = useState('');

  const handleChangeInput = (e) => {
    setIncidencia(e.target.value);
  };

  const handleChangeList = (e, value) => {
    setSuperHeroe(value.label);
  };

  const addRows = () => {
    setId(id + 1);
    const newObject = createData(id, incidencia, superHeroe, 24);
    setRows([...rows, newObject]);
    setIncidencia('');
    setSuperHeroe('');
  };

  const deleteRows = (idDelete) => {
    setRows(rows.filter(r => r.id !== idDelete));
  };

  return (
    <div className="App">
      <h1>Central de Emergencias Marvel</h1>
      <div className="input">
        <InputText
          value={incidencia}
          labelText={"Incidencia"}
          handleChange={(e) => handleChangeInput(e)}
        />
        <ListBox
          value={superHeroe}
          list={list}
          handleChange={(e, value) => handleChangeList(e, value)}
        />
        <TapButton text={"Asignar"} action={addRows} />
      </div>
      <br />
      <Grid rows={rows} deleteRows={(idDelete) => deleteRows(idDelete)} />
    </div>
  );
}

export default App;
