import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import ModalMarvel from "../Modal/ModalMarvel";
import { useEmergency } from "../../context/EmergencyContext/EmergencyContext";
import DeleteIcon from "@mui/icons-material/Delete";

const TablaA = () => {
  const { assignedEmergency, setEmergencySelected, deleteEmergency } = useEmergency();
  const [open, setOpen] = useState(false);
  const handleOpen = (emergency) => {
    setOpen(true);
    setEmergencySelected(emergency);
  };
  const handleClose = () => setOpen(false);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, alignContent: "center", justifyContent: "center" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>numeros</TableCell>
            <TableCell align="right">Emergencias</TableCell>
            <TableCell align="right">Heroe</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assignedEmergency.map((fila) => (
            <TableRow
              key={fila.number}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {fila.number}
              </TableCell>
              <TableCell align="right">{fila.description}</TableCell>
              <TableCell align="right">{fila.hero}</TableCell>
              <TableCell align="right">
                <AddIcon onClick={() => handleOpen(fila)} />
                <DeleteIcon onClick={() => deleteEmergency(fila.number, true)} />
              </TableCell>
              <ModalMarvel open={open} handleClose={handleClose} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaA;
