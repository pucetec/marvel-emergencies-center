import { Modal } from "./components/Modal/Modal";
import { AssignedList } from "./components/AssignedList/AssignedList";
import { Header } from "./components/Header/Header";
import { WithoutAssignList } from "./components/WithoutAssignList/WithoutAssignList";
import { HeroProvider } from "./contexts/HeroContext";

const App = () => {
  return (
    <HeroProvider>
      <Header />
      <hr />
      <WithoutAssignList />
      <hr />
      <AssignedList />
      <Modal />
    </HeroProvider>
  );
};

export default App;
