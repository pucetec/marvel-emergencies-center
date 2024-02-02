import logo from './logo.svg';
import './App.css';
import IncidenciaForm from './common/IncidenciaForm';
import env from 'react-dotenv';
import md5 from 'md5';
import axios from 'axios';


function App() {
  const GATEWAY = "http://gateway.marvel.com/v1/public/comics?apikey=";
  const bringMarvelInfo = async () => {
    const currentTimestamp = Date.now().toString();
    const joinedKey = currentTimestamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
    const md5Key = md5(joinedKey);

    const response = await axios.get(
      GATEWAY + env.PUBLIC_KEY + "&ts=" + currentTimestamp + "&hash=" + md5Key,
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    console.log({ response });
  };




  return (
    <div className="App">
      <IncidenciaForm/>
    </div>
  );
}

export default App;
