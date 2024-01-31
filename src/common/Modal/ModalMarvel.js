import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import md5 from "md5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxHeight: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PUBLIC_KEY = "84412ac7bd3d2fa8112e75f95d05a1cb";
const PRIVATE_KEY = "6ecb3bb179f6f30e4ea6599f7857380f62f1049b";
const BASE_URL = "https://gateway.marvel.com/v1/public/characters";

export default function ModalMarvel({ open, handleClose }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timestamp = new Date().getTime();
        const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

        const response = await axios.get(
          `${BASE_URL}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching Marvel characters:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                {/* Agrega más encabezados según la información que desees mostrar */}
              </TableRow>
            </TableHead>
            <TableBody>
              {characters.map((character) => (
                <TableRow key={character.id}>
                  <TableCell>{character.name}</TableCell>
                  <TableCell>{character.description}</TableCell>
                  {/* Agrega más celdas según la información que desees mostrar */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
