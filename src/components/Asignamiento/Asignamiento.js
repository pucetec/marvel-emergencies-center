import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo2 from "../SubTitulo2/SubTitulo2";


const Asignamiento = () => {

  const { listAsignadas, borrarElementoAsignados, listAsignadasHeroe, regresanLosItems, setHeroe } = useContextoGeneral();

  return (

    <div style = {{ textAlign: "center", width: "80%", margin: "auto"  }}>

      <div className="visor-inferior">

        <SubTitulo2 />

        <div className="contenedor-tabla">
          <table>
            <thead>
              <tr>
              <th> <label> # </label> </th>
              <th> <label> EMERGENCIA </label> </th>
              <th> <label> HÉROE </label> </th>
              <th> <label> ACCIONES </label> </th>
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
                    { listAsignadasHeroe[ i ] }
                  </td>
                  <td>
                    <button className="boton-borrar" onClick={ () => { borrarElementoAsignados(i) } }> Borrar </button>
                    <button className="boton-reasignar" onClick={ () => { regresanLosItems(item);
                      borrarElementoAsignados(i); setHeroe(""); } }> Reasignar </button>
                  </td>
                </tr>
              ) ) }
            </tbody>
          </table>
        </div>

      </div>    

    </div>
  );
};

export default Asignamiento;
