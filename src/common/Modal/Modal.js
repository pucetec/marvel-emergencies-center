import React, { useState } from "react";
import { Modal, Typography } from "@mui/material";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong"; // Importar el icono

const ModalMarvel = ({ children, title, listItems }) => {
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
            <CenterFocusStrongIcon onClick={handleOpenModal} />
            <Modal
                open={isOpen}
                onClose={handleCloseModal}
            >
                <li>
                    <div style={style}>
                        <li>
                            <Typography variant="h5" gutterBottom>
                                <center>{title}</center>
                            </Typography>
                            <div>
                                {listItems.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </div>
                            <button variant="outlined" onClick={handleCloseModal}>
                                Cerrar
                            </button>
                        </li>
                    </div>
                </li>

            </Modal>
        </div>
    );
};

export default ModalMarvel;
