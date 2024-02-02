import "./App.css";
import { useState } from "react";
import Typography from "./common/Typography/Typography";
import TextField from "./common/TextField/TextField";
import Button from "./common/Button/Button";
import { Modal, Box } from "@mui/material";
import CropFreeIcon from "@mui/icons-material/CropFree";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
//Estilo Modal
const styleModal = {
  position: "static",
  left: "50%",
  top: "50%",
  margin: "auto",
  width: "50%",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const [value, setValue] = useState("");
  const [emergencyList, setEmergencyList] = useState([]);
  const [isEmergencyAssigned, setIsEmergencyAssigned] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const handleClick = () => {
    if (value === " ") alert("No se ha reportado ninguna emergencia ");
    else
      setEmergencyList((prevList) => {
        return [...prevList, value];
      });
    setValue(" ");
  };

  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = (emergency) => {
    setSelectedEmergency(emergency);
    setOpen(true);
    setIsButtonEnabled(true);
  };

  const handleClose = () => {
    setSelectedEmergency("");
    setOpen(false);
  };

  const handleDelete = (index) => {
    setEmergencyList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const [assignedEmergencies, setAssignedEmergencies] = useState([]);

  const handleAssignHero = (heroName) => {
    setAssignedEmergencies((prevList) => [
      ...prevList,
      { emergency: selectedEmergency, hero: heroName },
    ]);
    setIsEmergencyAssigned(true);
    setIsButtonEnabled(false);
  };

  const handleDeleteAssigned = (index) => {
    setAssignedEmergencies((prevList) =>
      prevList.filter((_, i) => i !== index)
    );
  };
  const marvelHeroes = [
    "Chapulín Colorado",
    "Los felinos Cósmicos",
    "Mazzinger Z",
    "El Vengador",
    "Mosquito Mosquera",
    "Hulk",
    "Caballeros del Zodíaco",
  ];

  return (
    <div>
      <div align={"center"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"
          alt="Marvel Logo"
          style={{ width: "150px", height: "auto" }}
        />
        <Typography level={"h1"} children={"Central de Emergencias"} />
      </div>
      <div align="center">
        <td>Emergencia</td>
        <td>
          <TextField
            label="Escribe una emergencia"
            variant="outlined"
            type="text"
            value={value}
            size="small"
            onChange={(event) => setValue(event.target.value)}
          ></TextField>
        </td>
        <td>
          <Button
            variant={"contained"}
            value={"Ingresar"}
            onClick={handleClick}
          ></Button>
        </td>
      </div>

      <div align="center">
        <h2>Emergencia Sin Asignar</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Emergencia</th>
              <th></th> {/* Espacio adicional */}
              <th></th> {/* Espacio adicional */}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {emergencyList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <CropFreeIcon
                    onClick={() => handleOpen(item)}
                    color="success"
                  ></CropFreeIcon>
                </td>
                <td></td> {/* Espacio adicional */}
                <td></td> {/* Espacio adicional */}
                <td>
                  <DeleteForeverIcon
                    color="error"
                    onClick={() => handleDelete(index)}
                  ></DeleteForeverIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div align="center">
        <h2>Emergencia Asignadas</h2>
        <table>
          <thead>
            <th>#</th>
            <th>Emergencia</th>
            <th></th> {/* Espacio adicional */}
            <th></th> {/* Espacio adicional */}
            <th>Super Héroe</th>
            <th></th> {/* Espacio adicional */}
            <th></th> {/* Espacio adicional */}
            <th>Acciones</th>
          </thead>
          <tbody>
            {assignedEmergencies.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.emergency}</td>
                <td></td> {/* Espacio adicional */}
                <td></td> {/* Espacio adicional */}
                <td>{item.hero}</td>
                <td></td> {/* Espacio adicional */}
                <td></td> {/* Espacio adicional */}
                <td>
                  <DeleteForeverIcon
                    color="error"
                    onClick={() => handleDeleteAssigned(index)}
                  ></DeleteForeverIcon>
                  <td></td> {/* Espacio adicional */}
                  <td></td> {/* Espacio adicional */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={styleModal}>
          <div>
            <Typography level="h2" children="Tipo de Emergencia:"></Typography>
            <Typography level="h4">{selectedEmergency}</Typography>
          </div>
          <div>
            <Typography level="h2">Asigna tu súper héroe</Typography>
            <table className="table table-sm">
              <thead>
                <th>#</th>
                <th>Nombre</th>
                <th>Asignar</th>
              </thead>
              <tbody>
                {marvelHeroes.map((hero, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{hero}</td>
                    <td>
                      <Button
                        variant="contained"
                        value="Asignar"
                        onClick={() => handleAssignHero(hero)}
                        disabled={!isButtonEnabled}
                      ></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button onClick={handleClose} value="Cerrar"></Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default App;
