import { Grid as MaterialGrid } from "@mui/material";
import { useMarvelAPI } from "../../contexts/HeroContext";
import { Fragment } from "react";

const AssignedGrid = () => {
  const { assignedEmergensyList, deleteFromAssignedList, openModal } =
    useMarvelAPI();
  return (
    <div
      style={{
        width: "73%",
        padding: "30px",
        paddingLeft: "420px",
      }}
    >
      <MaterialGrid container spacing={3}>
        {assignedEmergensyList?.map((element) => (
          <Fragment key={element.id}>
            <MaterialGrid item xs={3} md={3} xl={3}>
              <div>{element.id}</div>
            </MaterialGrid>
            <MaterialGrid item xs={3} md={3} xl={3}>
              <div>{element.emergencyName}</div>
            </MaterialGrid>
            <MaterialGrid item xs={2} md={2} xl={2}>
              <div>{element.heroName}</div>
            </MaterialGrid>
            <MaterialGrid item xs={1} md={1} xl={1}>
              <div onClick={() => openModal(element.heroName)}>
                {element.focusIcon}
              </div>
            </MaterialGrid>
            <MaterialGrid item xs={1} md={1} xl={1}>
              <div onClick={() => deleteFromAssignedList(element.id)}>
                {element.trashIcon}
              </div>
            </MaterialGrid>
          </Fragment>
        ))}
      </MaterialGrid>
    </div>
  );
};

export default AssignedGrid;
