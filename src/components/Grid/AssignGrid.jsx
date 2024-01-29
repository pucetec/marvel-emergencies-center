import { Grid as MaterialGrid } from "@mui/material";
import { useMarvelAPI } from "../../contexts/HeroContext";
import { Fragment } from "react";

const EmergencyGrid = ({ items, xs, md, xl }) => {
  const { deleteFromEmergencyList, openModal } = useMarvelAPI();
  return (
    <div
      style={{
        width: "50%",
        padding: "50px",
        paddingLeft: "550px",
      }}
    >
      <MaterialGrid container spacing={3}>
        {items.map((element) => (
          <Fragment key={element.id}>
            <MaterialGrid item xs={xs} md={md} xl={xl}>
              <div>{element.id}</div>
            </MaterialGrid>
            <MaterialGrid item xs={xs} md={4} xl={4}>
              <div>{element.name}</div>
            </MaterialGrid>
            <MaterialGrid item xs={xs} md={2} xl={2}>
              <div onClick={() => openModal(element.name)}>
                {element.focusIcon}
              </div>
            </MaterialGrid>
            <MaterialGrid item xs={xs} md={2} xl={2}>
              <div onClick={() => deleteFromEmergencyList(element.id)}>
                {element.trashIcon}
              </div>
            </MaterialGrid>
          </Fragment>
        ))}
      </MaterialGrid>
    </div>
  );
};

export default EmergencyGrid;
