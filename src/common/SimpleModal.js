import React, { useState } from 'react';
import {
  Button,
  Modal,
  Typography,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SimpleModal = ({ modal, close, assignHero }) => {
  const [modalData] = useState([
    { id: 1, incidencia: 'SUPERHEROE 1' },
    { id: 2, incidencia: 'SUPERHEROE 2' },
    { id: 3, incidencia: 'SUPERHEROE 3' }
    // Agrega más datos según sea necesario
  ]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAsignarClick = (selectedHero) => {
    assignHero(selectedHero);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Modal
        open={modal}
        onClose={close}
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
            bgcolor: 'pink',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            <h2>EMERGENCIAS ASIGNADAS</h2>
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {modalData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.incidencia}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleAsignarClick(item)} sx={{ backgroundColor: 'success.main', color: 'purple' }}>Asignar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={close} sx={{ mt: 2 }}>
            Cerrar
          </Button>
        </Box>
      </Modal>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          ¡Asignado!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SimpleModal;