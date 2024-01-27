import { AssignedList } from "./components/AssignedList/AssignedList";
import { Header } from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { WithoutAssignList } from "./components/WithoutAssignList/WithoutAssignList";
function App() {
  return (
    <>
      <Header />
      <hr />
      <WithoutAssignList />
      <hr />
      <AssignedList />
      <Modal />
    </>
  );
}

export default App;
