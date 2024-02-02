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
  } = useMarvelAPI();
  const results = data?.data?.data?.results;

  const handleGetHero = (heroName) => {
    const newItem = {
      id: assignedEmergensyList.length + 1, // Usa la longitud actual de la lista como ID, aunque no es lo ideal ya que se puede terminar repitiendo.
      emergencyName: currentEmergency,
      heroName: heroName,
      focusIcon: <CenterFocusStrongIcon fontSize="large" />,
      trashIcon: <DeleteIcon fontSize="large" />,
    };

    closeModal();
    const temp = assignedEmergensyList.filter(
      (element) => element.emergencyName !== currentEmergency
    );
    console.log({ temp });
    console.log({ currentEmergency });
    // if (

    // ) {
    //   console.log("Hola");
    // } else {
    updateAssignedemergensyList(newItem);
    //   console.log("no sirve");
    // }
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
