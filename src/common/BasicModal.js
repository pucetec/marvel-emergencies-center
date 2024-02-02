
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Grid, Select, MenuItem } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ TextoModal, setSelectedHero }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [heroe, setHeroe] = useState("");

  const handleHeroeChange = (event) => {
    setHeroe(event.target.value);
  };

  const handleAsignarClick = () => {
    setSelectedHero(heroe); // Pass the selected hero back to the parent component
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Asignar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Asigna tu Superheroe para {TextoModal}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Grid item xs={3}>
            <Typography variant="subtitle1">Heroe:</Typography>
            <Select
              value={heroe}
              onChange={handleHeroeChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>
                Seleccione Heroe
              </MenuItem>
              <MenuItem value={"Heroe 1"}>Heroe 1</MenuItem>
              <MenuItem value={"Heroe 2"}>Heroe 2</MenuItem>
              <MenuItem value={"Heroe 3"}>Heroe 3</MenuItem>
            </Select>
          </Grid>
          <Button variant="contained" color="primary" onClick={handleAsignarClick}>
            Asignar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}