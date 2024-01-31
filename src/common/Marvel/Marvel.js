import React, { useState } from "react";
import { Container, Modal } from "@mui/material";

const Marvel = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="sm">

            <Modal
                open={open}
                onClose={handleClose}
            >
            </Modal>
        </Container>
    );
};

export default Marvel;