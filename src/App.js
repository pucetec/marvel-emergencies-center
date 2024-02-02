import './App.css';
import { Button } from './common/Button/Button.js';
import { TextField } from './common/Input/Input.js';
import { Typography } from './common/Typography/Typography.js';
import { BasicTable, TableEmergency } from './common/TableEmergency/TableEmergency.js';

const App = () => {
  return (
    <div className="App">
      <div>
        <br />
        <Typography variant={'body1'} align={'center'} level={'h1'} children={'Emergencia'} />
      </div>
      <div>
        <Typography align={'left'} paragraph={'Emergencia'} level={'h6'} />
        <TextField label={'Descripcion emergencia'} variant={'outlined'} />
        <Button variant={"contained"} value={"Asignar"}></Button>
      </div>
      <br />
      <div>
        <Typography variant={'h2'} align={'center'} level={'h6'} children={'Emergencia sin atender'} />
        <TableEmergency></TableEmergency>
      </div>
    </div>
  );
}
export default App;