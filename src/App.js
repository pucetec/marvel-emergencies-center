
import React from "react";
import "./App.css";
import IncidenciaForm from "./common/IncidenciasForm";
import md5 from "md5";
//import axios from "axios";
import env from "react-dotenv";

function App() {
  return (
    <div className="App">
      <IncidenciaForm />
    </div>
  );
}

export default App;
