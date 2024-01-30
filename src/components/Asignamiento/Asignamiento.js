import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo2 from "../SubTitulo2/SubTitulo2";


const Asignamiento = () => {

  const { listAsignadas, borrarElementoAsignados, heroe, regresanLosItems } = useContextoGeneral();

  return (
    <div style = {{ textAlign: "center", width: "80%", margin: "auto"  }}>
      <SubTitulo2 />

      <div className="contenedor-tabla">
        <table>
          <thead>
            <tr>
            <th>#</th>
            <th>EMERGENCIA</th>
            <th>HÉROE</th>
            <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            { listAsignadas.map( (item, i) => (
              <tr key={ i }>
                <td>
                  { i + 1 }
                </td>
                <td>
                  { item }
                </td>
                <td>
                  { heroe }
                </td>
                <td>
                  <button className="boton-borrar" onClick={ () => { borrarElementoAsignados(i) } }>Borrar</button>
                  <button className="boton-reasignar" onClick={ () => { regresanLosItems(item); borrarElementoAsignados(i) } }>Reasignar</button>
                </td>
              </tr>
            ) ) }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Asignamiento;
