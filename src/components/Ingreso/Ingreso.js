import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo from "../SubTitulo/SubTitulo";


const Ingreso = () => {

  const { list, emergencia, setEmergencia, addItems, addItemsSeleccionados, borrarElementoIngresos} = useContextoGeneral();

  return (
    <div style = {{ textAlign: "center", width: "70%", margin: "auto" }}>
      <p>
        <input value={emergencia} onChange={ event => setEmergencia(event.target.value)} />
        <button onClick={ addItems }>Ingreso de emergencia</button>
      </p>
      <SubTitulo />
      <p>
        <ol>
          { list.map( (item, i) => (
          <li key={ i }>
            <div className="items-listas">
              <div className="texto-item">
                { item }
              </div>
              <div className="botones">
                <button onClick={ () => { addItemsSeleccionados(item); borrarElementoIngresos(i); } }>Asignar</button>
                <button onClick={ () => { borrarElementoIngresos(i) } }>Borrar</button>
              </div>
            </div>
            </li>
          ) ) }
        </ol>
      </p>
    </div>
  );
};

export default Ingreso;
