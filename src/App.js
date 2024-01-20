function App() {
  return (
    <div>
      <div>
        <h1>Central de Emergencias</h1>
      </div>
      <div>
        <label>Emergencia</label>
        <input placeholder="emergencia"></input>
      </div>
      <div>
        <button>Ingresar</button>
      </div>
      <div>
        <h2>Emergencias sin asignar</h2>
      </div>
      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Emergencia</th>
            <th>Acciones</th>
          </tr>
        </table>
      </div>
      <div>
        <h2>Emergencias Asignadas</h2>
      </div>
      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Emergencia</th>
            <th>Heroe</th>
            <th>Acciones</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
