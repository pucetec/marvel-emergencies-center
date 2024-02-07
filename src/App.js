import React, { useState } from "react";
import Typography from "./common/Typography/Typography";
import Button from "./common/Button/Button";
import Input from "./common/InputText/InputText"
import { Container } from "@mui/material";
import IconButtons from "./common/IconButton/IconButton";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModalMarvel from "./common/Modal/Modal";
import MarvelComponent from "./common/Marvel/Marvel";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const AssignHero = [
    {
      action: <IconButtons onClick={handleIconClick} />,
    },
    {
      action: <IconButtons onClick={handleIconClick} />,
    },
    {
      action: <IconButtons onClick={handleIconClick} />,
    },
  ];

  return (
    <div>
      <Typography variant={"h3"} align={"center"} value={"Central de Emergencias"} />
      <center>
        <div>
          <Typography variant={"h6"} value={"Emergencias"} />
          <br></br>
          <Input color={"primary"} variant={"contained"} />
          <Button
            content={"test"}
            color={"primary"}
            variant={"contained"}
            align={"rigth"}
            value={"Ingresar"}
          />
        </div>
        <br></br>
        <div>
          <Typography variant={"h6"} align={"center"} value={"Emergencias sin asignar"} />
          <Container maxWidth="sm">
            <li>
              Heroe
              <button>
                <ModalMarvel
                  title="Asigna tu super héroe"
                  listItems={AssignHero.map((item) => (
                    <button>
                      <IconButtons key={item.text}>{item.buttonText}</IconButtons>
                    </button>
                  ))}
                  open={isModalOpen}
                  onClose={handleModalClose}
                >
                  <MarvelComponent />
                </ModalMarvel>
              </button>
              <button>
                <DeleteOutlineIcon></DeleteOutlineIcon>
              </button>
            </li>
            <li>
              Heroe
              <button>
                <ModalMarvel
                  title="Asigna tu super héroe"
                  listItems={AssignHero.map((item) => (
                    <button>
                      <IconButtons key={item.text}>{item.buttonText}</IconButtons>
                    </button>
                  ))}
                  open={isModalOpen}
                  onClose={handleModalClose}
                >
                  <MarvelComponent />
                </ModalMarvel>
              </button>
              <button>
                <DeleteOutlineIcon></DeleteOutlineIcon>
              </button>
            </li>
          </Container>
        </div>
        <br></br>
        <br></br>
        <div>
          <Typography variant={"h6"} align={"center"} value={"Emergencias Asignadas"} />
          <Container maxWidth="sm">
            <li>
              Heroe
              <button>
                <DeleteOutlineIcon></DeleteOutlineIcon>
              </button>
              <button>
                <ModalMarvel
                  title="Asigna tu super héroe"
                  listItems={AssignHero.map((item) => (
                    <button>
                      <IconButtons key={item.text}>{item.buttonText}</IconButtons>
                    </button>
                  ))}
                  open={isModalOpen}
                  onClose={handleModalClose}
                >
                  <MarvelComponent />
                </ModalMarvel>
              </button>
            </li>
            <li>
              Heroe
              <button>
                <DeleteOutlineIcon></DeleteOutlineIcon>
              </button>
              <button><ModalMarvel
                title="Asigna tu super héroe"
                listItems={AssignHero.map((item) => (

                  <button>
                    <IconButtons key={item.text}>{item.buttonText}</IconButtons>
                  </button>
                ))}
                open={isModalOpen}
                onClose={handleModalClose}
              >
                <MarvelComponent />
              </ModalMarvel></button>
            </li>
          </Container>
        </div>
      </center>
    </div>
  );
}

export default App;
