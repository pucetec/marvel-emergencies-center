import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo2 from "../SubTitulo2/SubTitulo2";
import { Modal } from "@mui/material";


const Asignamiento = () => {

  const { listAsignadas, borrarElementoAsignados, listAsignadasHeroe, regresanLosItems, setHeroe,
   preguntaBorrarAsignadas, setPreguntaBorrarAsignadas, setIndice } = useContextoGeneral();


  const abrirPreguntaAsignadas  = () => { setPreguntaBorrarAsignadas(true);  };
  const cerrarPreguntaAsignadas = () => { setPreguntaBorrarAsignadas(false); };
 

  return (

    <div style = {{ textAlign: "center", width: "80%", margin: "auto"  }}>


      <Modal
        open={preguntaBorrarAsignadas}
        onClose={cerrarPreguntaAsignadas}
        aria-labelledby="modal-pregunta-borrar"
        aria-describedby="modal-modal-description"
      >
        <div style={{ padding: '20px', color: 'rgb(200, 250, 180)', backgroundColor: 'rgba(70, 100, 130, 0.9)', width: '315px',
         margin: 'auto', marginTop: '100px', borderRadius: '8px', borderColor: 'rgba(45, 45, 75, 0.4)', borderStyle:'solid' }}>
          <h2 id="modal-pregunta-borrar">SEGURO QUE DESEA BORRAR?</h2>
          <p id="modal-modal-description">
          </p>
          <button className="boton-modal" onClick={ () => { cerrarPreguntaAsignadas(); borrarElementoAsignados(); } }> ¡¡¡ ELIMINAR !!! </button>
          <button className="boton-modal" onClick={ () => { cerrarPreguntaAsignadas(); } }> CANCELAR </button>
        </div>
      </Modal>




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
                    <small> { i + 1 } </small>
                  </td>
                  <td>
                    <small> { item } </small>
                  </td>
                  <td>
                    <small> { listAsignadasHeroe[ i ] } </small>
                  </td>
                  <td>
                    <button className="boton-borrar" onClick={ () => { setIndice(i); abrirPreguntaAsignadas(); } }> Borrar </button>
                    <button className="boton-reasignar" onClick={ () => { setIndice(i); regresanLosItems(item);
                      borrarElementoAsignados(); setHeroe(""); } }> Reasignar </button>
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
