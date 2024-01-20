import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div>
        <br></br>
        <center>Central de emergencias</center>
      </div>
      <div>
      <br></br>
        <label for="emerg">Emergencias</label>
        <input type='text' id='emerg'/>
        <button>Ingresar</button>

      </div>
      <br></br>
      <div>
        <center title=''>Emergencia sin asignar</center>
      </div>
        
    </div>
  );
}

export default App;
