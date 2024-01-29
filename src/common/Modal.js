import React, { useState } from "react";
import { Modal, Typography } from "@mui/material";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong"; // Importar el icono

const CustomModal = ({ children, title, listItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const style = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      {/* Cambiar el botón por el icono */}
      <CenterFocusStrongIcon onClick={handleOpenModal} />
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div style={style}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <div>
            {listItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <button variant="outlined" onClick={handleCloseModal}> {/* Cambiar a un botón HTML regular */}
            Cerrar Modal
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
