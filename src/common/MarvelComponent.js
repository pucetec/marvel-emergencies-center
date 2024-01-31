import React, { useState } from "react";
import Table from "./common/Table/Table";
import axios from "axios";
import md5 from "md5";
import env from "react-dotenv";
import { Box, Button, Container, Grid, Modal, Typography } from "@mui/material";

const GATEWAY = "http://gateway.marvel.com/v1/public/comics?apikey=";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MarvelComponent = () => {
  const bringMarvelInfo = async () => {
    const currentTimestamp = Date.now().toString();
    const joinedKey = currentTimestamp + env.PRIVATE_KEY + env.PUBLIC_KEY;
    const md5Key = md5(joinedKey);
    const response = await axios.get(
      GATEWAY + env.PUBLIC_KEY + "&ts=" + currentTimestamp + "&hash=" + md5Key,
      {
        headers: {
          Accept: "/",
        },
      }
    );
    console.log({ response });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h3">Emergencias sin asignar</Typography>
        <Table
          headers={["#", "Emergencia", "Acciones"]}
          bodyRows={[
            "1",
            "Robo en Fake street 1234",
            <Button onClick={handleOpen}>Asignar</Button>,
          ]}
        />
      </Box>
      <Box>
        <Typography variant="h3">Emergencias asignadas</Typography>
        <Table
          headers={["#", "Nombre", "Asignar", "2", "34324"]}
          bodyRows={["1", "Spiderman", "boton", 1, 2]}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default MarvelComponent;
