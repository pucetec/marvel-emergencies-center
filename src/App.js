import "./App.css";
import { EmergencyProvider } from "./context/EmergencyContext/EmergencyContext";
import Main from "./pages/main/Main";


function App() {
  

  return (
    <EmergencyProvider>
    <Main />
    </EmergencyProvider>
  );
}

export default App;
