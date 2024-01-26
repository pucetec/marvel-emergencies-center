import React from "react";
import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo from "../SubTitulo/SubTitulo";



const Ingreso = () => {

const { list, setEmergencia, addItems } = useContextoGeneral();

  return (
    <div style = {{ textAlign: "center" }}>
      <p>
        <input onChange={ event => setEmergencia(event.target.value)} />
        <button onClick={ addItems }>Ingreso de emergencia</button>
      </p>
      <SubTitulo />
      <p>
        <ol>
          { list.map( (item, i) => ( <li key={ i }>{ item }</li> ) )
           }
        </ol>
      </p>
    </div>
  );
};

export default Ingreso;
