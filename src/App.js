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
    if (value === " ") alert("¡Error capa 8! -> Llene el cuadro por favor ");
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
    "Spiderman",
    "Ironman",
    "Capitan America",
    "Thor",
    "Capitana Marvel",
    "Hulk",
    "Doctor Strange",
    "Pantera Negra",
    "Ant-Man",
    "Wolverine",
  ];

  return (
    <div>
      <div align={"center"}>
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
            <th>#</th>
            <th>Emergencia</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {emergencyList.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item} </td>
                <td>
                  <CropFreeIcon
                    onClick={() => handleOpen(item)}
                    color="success"
                  ></CropFreeIcon>
                  <DeleteForeverIcon
                    color="error"
                    onClick={() => handleDelete(0)}
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
            <th>Héroe</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            {assignedEmergencies.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.emergency}</td>
                <td>{item.hero}</td>
                <td>
                  <DeleteForeverIcon
                    color="error"
                    onClick={() => handleDeleteAssigned(index)}
                  ></DeleteForeverIcon>
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
