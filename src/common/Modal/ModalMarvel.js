import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import axios from "axios";
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
import {
  Table,
  TableBody,
  TableFooter,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import md5 from "md5";
import Boton from "../Boton/Boton";
import { useEmergency } from "../../context/EmergencyContext/EmergencyContext";

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxHeight: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PUBLIC_KEY = "84412ac7bd3d2fa8112e75f95d05a1cb";
const PRIVATE_KEY = "6ecb3bb179f6f30e4ea6599f7857380f62f1049b";
const BASE_URL = "https://gateway.marvel.com/v1/public/characters";

export default function ModalMarvel({ open, handleClose }) {
  const { addAssignedEmergency, emergencySelected, deleteEmergency } = useEmergency();
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const manageEmergency = (number, description, hero) => {
    addAssignedEmergency(number, description, hero);
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timestamp = new Date().getTime();
        const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

        const response = await axios.get(
          `${BASE_URL}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=100`
        );
        console.log(response.data.data.results);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching Marvel characters:", error);
      }
    };

    fetchData();
  }, []);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - characters.length) : 0;

  console.log(characters.length);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
              <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? characters.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : characters
              ).map((character) => (
                <TableRow key={character.id}>
                  <TableCell>{character.id}</TableCell>
                  <TableCell>{character.name}</TableCell>
                  <TableCell>
                    <Boton variant="contained" onClick={() => manageEmergency(emergencySelected.number, emergencySelected.description, character.name)} texto="Asignar"/>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <CustomTablePagination
                  rowsPerPageOptions={[3,5,7, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={characters.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      "aria-label": "rows per page",
                    },
                    actions: {
                      showFirstButton: true,
                      showLastButton: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
