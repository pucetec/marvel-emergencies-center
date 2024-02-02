import { useMarvelAPI } from "../../contexts/HeroContext";
import { Grid as MaterialGrid } from "@mui/material";
import Button from "../../common/Button/Button";
import { Fragment } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

export const HeoresGrid = () => {
  const {
    data,
    assignedEmergensyList,
    currentEmergency,
    updateAssignedemergensyList,
    closeModal,
    currentId,
  } = useMarvelAPI();
  const results = data?.data?.data?.results;

  const handleGetHero = (heroName) => {
    const newItem = {
      id: currentId, //Se ha optimizado el uso del id, ahora es un argumento que viaja a través del contexto para poder controlar el borrado de las emergencias ya asignadas.
      emergencyName: currentEmergency,
      heroName: heroName,
      focusIcon: <CenterFocusStrongIcon fontSize="large" />,
      trashIcon: <DeleteIcon fontSize="large" />,
    };

    closeModal();
    const temp = assignedEmergensyList.find(
      (element) => element.emergencyName === currentEmergency
    );
    console.log({ temp });
    console.log({ currentEmergency });
    if (temp) {
      temp.heroName = heroName;
    } else {
      updateAssignedemergensyList(newItem);
    }
  };
  return (
    <div>
      <MaterialGrid container spacing={3}>
        {results?.map((element, index) => (
          <Fragment key={element.id}>
            <MaterialGrid item xs={12} md={4} xl={4}>
              <div>{element.id}</div>
            </MaterialGrid>
            <MaterialGrid item xs={12} md={4} xl={4}>
              <div>{element.name}</div>
            </MaterialGrid>
            <MaterialGrid item xs={12} md={4} xl={4}>
              <Button
                content={"Asignar"}
                color={"primary"}
                variant={"contained"}
                onClick={() => {
                  handleGetHero(element.name);
                }}
              />
            </MaterialGrid>
          </Fragment>
        ))}
      </MaterialGrid>
    </div>
  );
};
