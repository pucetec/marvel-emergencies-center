import React, { useState, useEffect } from "react";
import { Modal, Typography } from "@mui/material";
import Icon from "./Icon";

const CustomModal = ({ open, onClose, title, listItems }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    onClose();
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
      <Icon onClick={handleOpenModal} />
      <Modal
        open={open}
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
          <button variant="outlined" onClick={handleCloseModal}>
            {" "}
            Cerrar Modal
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
