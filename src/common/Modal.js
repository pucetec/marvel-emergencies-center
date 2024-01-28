import { useState } from "react";

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  margin: "auto",
  width: 200,
  height: 200,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const handleClickButton = (buttonText) => {
    setModalText(buttonText);
    setIsOpen(true);
  };
  return (
    <div className="App">
      <Button variant="outlined" onClick={() => setIsOpen(true)}>
        ABRIR MODAL
      </Button>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style}>
          {modalText}
          <Button variant="outlined" onClick={() => setIsOpen(false)}>
            Cerrar MODAL
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default Modal;