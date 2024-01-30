import { useContextoGeneral } from "../../contexts/Contexto";
import SubTitulo from "../SubTitulo/SubTitulo";
import { useState } from "react";
import Modal from "@mui/material/Modal";



const Ingreso = () => {


  const [modal, setModal] = useState(false);

  const abirModal = () => {
    setModal(true);
  };

  const cerrarModal = () => {
    setModal(false);
  };


  const { heroe, setHeroe, listaHeroes, list, emergencia, setEmergencia, addItems, addItemsSeleccionados,
  borrarElementoIngresos} = useContextoGeneral();

  return (
    <div style = {{ textAlign: "center", width: "80%", margin: "auto" }}>
      <p>
        <input value={emergencia} onChange={ event => setEmergencia(event.target.value)} />
        <button id="boton-ingresos" onClick={ () => { setHeroe(""); addItems(); } }>Ingresar emergencia</button>
        <button className="boton-modal" onClick={ () => { setHeroe(""); abirModal(); } }>Superhéroes</button>
      </p>


      <Modal
        open={modal}
        onClose={cerrarModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ padding: '20px', color: "white", backgroundColor: '#405099', width: '300px', margin: 'auto',
        marginTop: '100px', borderRadius: '8px' }}>
          <h2 id="modal-modal-title">LISTA DE SUPERHÉROES</h2>
          <p id="modal-modal-description">
            ............................................................................<br />
            Mejor opción : {heroe}
            <br />............................................................................
            <ol>
              { listaHeroes.map( (item, i) => (
                <li key={ i }>
                  <div className="items-listas">
                    <div className="texto-item">
                      { item }
                    </div>
                    <div className="botones">
                      <button className="boton-reasignar" onClick={ () => { setHeroe(item); } }>Seleccionar</button>
                    </div>
                  </div>
                </li>
              ) ) }
        </ol>
          </p>
          <button className="boton-modal" onClick={cerrarModal}>OK !</button>
        </div>
      </Modal>


      <SubTitulo />


      <div className="contenedor-tabla">
        <table>
          <thead>
            <tr>
            <th>#</th>
            <th>EMERGENCIA</th>
            <th> </th>
            <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            { list.map( (item, i) => (
              <tr key={ i }>
                <td>
                  { i + 1 }
                </td>
                <td>
                  { item }
                </td>
                <td>
                  
                </td>
                <td>
                  <button className="boton-asignar" onClick={ () => { setHeroe(""); addItemsSeleccionados(item);
                  borrarElementoIngresos(i); abirModal(); } }>Asignar</button>
                  <button className="boton-borrar" onClick={ () => { borrarElementoIngresos(i) } }>Borrar</button>
                </td>
              </tr>
            ) ) }
          </tbody>
        </table>
      </div>
    
    </div>
  );
};

export default Ingreso;
