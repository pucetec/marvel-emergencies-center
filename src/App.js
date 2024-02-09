import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';


function SuperheroTable({ onClose, onAssignSuperhero }) {
  const superheroes = [
    { id: 1, name: 'Spiderman' },
    { id: 2, name: 'El señor de la noche' },
  ];

  return (
    <div>
      <h2>Asigna tu superhéroe</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Asignar</th>
          </tr>
        </thead>
        <tbody>
          {superheroes.map((hero) => (
            <tr key={hero.id}>
              <td>{hero.id}</td>
              <td>{hero.name}</td>
              <td>
                <button onClick={() => onAssignSuperhero(hero)}>Asignar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}
function App() {
  const [emergencyInput, setEmergencyInput] = useState('');
  const [emergencies, setEmergencies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setEmergencyInput(event.target.value);
  };

  const addEmergency = () => {
    if (emergencyInput.trim() !== '') {
      const newEmergency = {
        id: emergencies.length + 1,
        description: emergencyInput,
      };
      setEmergencies([...emergencies, newEmergency]);
      setEmergencyInput('');
    }
  };

  const removeEmergency = (id) => {
    const updatedEmergencies = emergencies.filter((emergency) => emergency.id !== id);
    setEmergencies(updatedEmergencies);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const assignSuperhero = (hero) => {
    console.log(`Emergencia asignada a ${hero.name}`);
    closeModal();
  };
 
  return (
    <div className='Main'>
       <h1>Central de Emergencias</h1>
       <div className='tree'>
       <p>Emergencia</p>
        <input placeholder='Escribe tu incidencia' value={emergencyInput} onChange={handleInputChange}></input>
        <button onClick={addEmergency}>Ingresar</button>

       </div>
        
       <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Emergencias</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {emergencies.map((emergency) => (
            <tr key={emergency.id}>
              <td>{emergency.id}</td>
              <td>{emergency.description}</td>
              <td>
                <button onClick={openModal}>Asignar</button>
                <button onClick={()=>removeEmergency(emergency.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <SuperheroTable onClose={closeModal} onAssignSuperhero={assignSuperhero} />
      </Modal>

    </div>
  );
}

export default App;