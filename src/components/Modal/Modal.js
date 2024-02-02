import React from "react";
import { Modal as CustomModal } from "@mui/material";
import Box from "@mui/material/Box";
import { useEmergencyContext } from "../../context/EmergencyContext";

const Modal = () => {
  const { open, heroes } = useEmergencyContext();
  console.log({ heroes });
  return (
    <CustomModal open={open}>
      <Box>
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
