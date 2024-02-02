import React from "react";
import { Modal as CustomModal } from "@mui/material";
import Box from "@mui/material/Box";
import { useEmergencyContext } from "../../context/EmergencyContext";
import Typography from "../../common/Typography/Typography";

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

const Modal = () => {
  const { open, setOpen, heroes } = useEmergencyContext();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <CustomModal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography level={"h1"}>Asigna tu súper héroe</Typography>
        <table>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Asignar</th>
          </tr>
          {heroes.map((item, i) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td></td>
            </tr>
          ))}
        </table>
      </Box>
    </CustomModal>
  );
};

export default Modal;
