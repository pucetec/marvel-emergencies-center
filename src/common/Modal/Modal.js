import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 25,
  p: 4,
};
const USER = { email: "espiedra@puce.edu.ec", password: "1234" };
export default function BasicModal({ TextoMOD, functionHero }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(functionHero);
  const handleAsign = (functionHero) => {
    functionHero();
    handleOpen();
  };

  return (
    <div>
      <Button onClick={functionHero}>Asignar</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {" Escoga un heroe para su emergencia: " + TextoMOD}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>

          {" heroe escogido " + "para su emergencia: " + TextoMOD}
          <label>TU HEROE HA SIDO ASIGNADO</label>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            ></Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
