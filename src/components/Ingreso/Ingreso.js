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




  const { list, emergencia, setEmergencia, addItems, addItemsSeleccionados, borrarElementoIngresos} = useContextoGeneral();

  return (
    <div style = {{ textAlign: "center", width: "70%", margin: "auto" }}>
      <p>
        <input value={emergencia} onChange={ event => setEmergencia(event.target.value)} />
        <button onClick={ addItems }>Ingreso de emergencia</button>
        <button onClick={abirModal}>Abrir Modal</button>
      </p>


      <Modal
        open={modal}
        onClose={cerrarModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={{ padding: '20px', color: "black", backgroundColor: 'grey', width: '300px', margin: 'auto', marginTop: '100px', borderRadius: '8px' }}>
          <h2 id="modal-modal-title">Contenido del Modal</h2>
          <p id="modal-modal-description">
            Aquí va la lista de superhéroes. Es sólo una prueba. Esto debe funcionar al hacer click en asignar. Hacer esto mañana.
          </p>
          <button onClick={cerrarModal}>Cerrar Modal</button>
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
