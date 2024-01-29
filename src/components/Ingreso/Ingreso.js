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
    <div style = {{ textAlign: "center", width: "55%", margin: "auto" }}>
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
        <div style={{ padding: '20px', color: "black", backgroundColor: 'grey', width: '300px', margin: 'auto',
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
                      <button onClick={ () => { setHeroe(item); } }>Seleccionar</button>
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


      <p>
        <ol>
          { list.map( (item, i) => (
          <li key={ i }>
            <div className="items-listas">
              <div className="texto-item">
                { item }
              </div>
              <div className="botones">
                <button onClick={ () => { setHeroe(""); addItemsSeleccionados(item); borrarElementoIngresos(i);
                abirModal(); } }>Asignar</button>
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
