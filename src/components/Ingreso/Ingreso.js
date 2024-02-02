import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo from "../SubTitulo/SubTitulo";
import Modal from "@mui/material/Modal";


const Ingreso = () => {

  const { heroe, setHeroe, listaHeroes, list, emergencia, setEmergencia, addItems, addItemsSeleccionados,
   borrarElementoIngresos, modal, setModal, preguntaBorrar, setPreguntaBorrar, setIndice} = useContextoGeneral();


  const abrirModal     = () => { setModal(true);  };
  const cerrarModal    = () => { setModal(false); };
  const abrirPregunta  = () => { setPreguntaBorrar(true);  };
  const cerrarPregunta = () => { setPreguntaBorrar(false); };


  const ejecutarEliminacion = () => {
    borrarElementoIngresos(preguntaBorrar);
  };


  return (

    <div style = {{ textAlign: "center", width: "80%", margin: "auto" }}>

      <p>
        <input value={emergencia} onChange={ event => setEmergencia(event.target.value) } />
        <button id="boton-ingresos" onClick={ () => { addItems(); } }> Ingresar emergencia </button>
      </p>




      <Modal
        open={modal}
        onClose={cerrarModal}
        aria-labelledby="modal-super-heroes"
        aria-describedby="modal-modal-description"
      >
        <div style={{ padding: '20px', color: 'rgb(200, 250, 180)', backgroundColor: 'rgba(70, 100, 130, 0.9)', width: '315px',
         margin: 'auto', marginTop: '100px', borderRadius: '8px', borderColor: 'rgba(45, 45, 75, 0.4)', borderStyle:'solid' }}>
          <h2 id="modal-super-heroes">LISTA DE SUPERHÉROES</h2>
          <p id="modal-modal-description">
            ...............................................................................<br />
            Elección reciente : {heroe}
            <br />...............................................................................
            <ol>
              { listaHeroes.map( (item, i) => (
                <li key={ i }>
                  <div className="items-listas">
                    <div className="texto-item">
                      { item }
                    </div>
                    <div className="botones">
                      <button className="boton-reasignar" onClick={ () => setHeroe(item) }> Seleccionar </button>
                    </div>
                  </div>
                </li>
              ) ) }
            </ol>
          </p>
          <button className="boton-modal" onClick={ cerrarModal }> OK ! </button>
        </div>
      </Modal>




      <Modal
        open={preguntaBorrar}
        onClose={cerrarPregunta}
        aria-labelledby="modal-pregunta-borrar"
        aria-describedby="modal-modal-description"
      >
        <div style={{ padding: '20px', color: 'rgb(200, 250, 180)', backgroundColor: 'rgba(70, 100, 130, 0.9)', width: '315px',
         margin: 'auto', marginTop: '100px', borderRadius: '8px', borderColor: 'rgba(45, 45, 75, 0.4)', borderStyle:'solid' }}>
          <h2 id="modal-pregunta-borrar">SEGURO QUE DESEA BORRAR?</h2>
          <p id="modal-modal-description">
          </p>
          <button className="boton-modal" onClick={ () => { cerrarPregunta(); ejecutarEliminacion(); } }> ¡¡¡ ELIMINAR !!! </button>
          <button className="boton-modal" onClick={ () => { cerrarPregunta(); } }> CANCELAR </button>
        </div>
      </Modal>







      <div className="visor-intermedio">


        <SubTitulo />

        <div className="contenedor-tabla">
          <table>
            <thead>
              <tr>
              <th> <label> # </label> </th>
              <th> <label> EMERGENCIA </label> </th>
              <th> <label> </label> </th>
              <th> <label> ACCIONES </label> </th>
              </tr>
            </thead>
            <tbody>
              { list.map( (item, i) => (
                <tr key={ i }>
                  <td>
                    <small> { i + 1 } </small>
                  </td>
                  <td>
                    <small> { item } </small>
                  </td>
                  <td>
                    
                  </td>
                  <td>
                    <button className="boton-asignar" onClick={ () => abrirModal()  }> 1 Héroe </button>
                    <button className="boton-asignar" onClick={ () => { addItemsSeleccionados(item);
                     borrarElementoIngresos(i); } }> 2 Asignar </button>
                    <button className="boton-borrar" onClick={ () => { setIndice(i); abrirPregunta(true); } }> Borrar </button>
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

export default Ingreso;

