import "./App.css";
import { ProveedorDeContexto } from "./contexts/Contexto";
import Titulo from "../src/components/Titulo/Titulo";
import Ingreso from "../src/components/Ingreso/Ingreso";
import SubTitulo2 from "./components/SubTitulo2/SubTitulo2";

import axios from "axios";
import md5 from "md5";
import env from "react-dotenv"

const GATEWAY = "https://gateway.marvel.com:443/v1/public/comics?apikey=80cc63e02ba096acedccb74853b58181&ts=13&hash=9943e11324234d730f84dd636faff7b4";

ts = 13;



const App = () => {

  const MarvelInfo = async () => {
    const ts = Date.now().toString();
    const unido = ts + env.PRIVATE_KEY + env.PUBLIC_KEY;
    const llaveMD5 = md5(unido);
  }

  const response =  axios.get(
    GATEWAY + env.PUBLIC_KEY + "&ts=" + ts + "&hash=" + llaveMD5,
    {
      headers: {
        Accept: "*/*",
      },
    }
  );
    console.log({response})

  return (
    <ProveedorDeContexto>
      <div style = {{ textAlign: "center"}}>
        <Titulo />
        <Ingreso />
        <SubTitulo2 />
        <p><h1>Tabla 2 [Eliminar] [Reasignar]</h1></p>
      </div>
    </ProveedorDeContexto>
  );

};

export default App;
