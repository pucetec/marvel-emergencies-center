import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo2 from "../SubTitulo2/SubTitulo2";


const Asignamiento = () => {

  const { listAsignadas, borrarElementoAsignados } = useContextoGeneral();

  return (
    <div style = {{ textAlign: "center", width: "70%", margin: "auto"  }}>
      <SubTitulo2 />
      <p>
        <ol>
          { listAsignadas.map( (item, i) => (
          <li key={ i }>
            <div className="items-listas">
                <div className="texto-item">
                    { item }
                </div>
                <div className="botones">
                <button onClick={ () => { borrarElementoAsignados(i) } }>Borrar</button>
                <button onClick={ () => {  } }>Reasignar</button>
                </div>
            </div>
            </li>
          ) ) }
        </ol>
      </p>
    </div>
  );
};

export default Asignamiento;
