import React, { useState } from 'react';
import { Button, Modal, Typography, Box } from '@mui/material';


const SimpleModal = ({modal, close}) => {
  const [open, setOpen] = useState(modal);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={modal}
        onClose={modal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
          <h2>ASIGNA TU SUPER HEROE</h2>
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
           
          </Typography>
          <Button onClick={close} sx={{ mt: 2 }}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default SimpleModal;
