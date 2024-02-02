import { useState } from "react";
import Button from "../../common/Button/Button";
import { TextField } from "../../common/InputBox/InputBox";
import Typography from "../../common/Typography/Typography";
import { useMarvelAPI } from "../../contexts/HeroContext";
import DeleteIcon from "@mui/icons-material/Delete";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import { v4 as uuidv4 } from "uuid";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { updateEmergencyList, setEmergency, getCurrentId } = useMarvelAPI();

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let id = uuidv4();
    getCurrentId(id);
    const newItem = {
      id: id, //El id es único para cada emergencia y ya no hay problema de que se reasignen id's, y también viaja a través del contexto.
      name: inputValue,
      focusIcon: <CenterFocusStrongIcon fontSize="large" />,
      trashIcon: <DeleteIcon fontSize="large" />,
    };

    updateEmergencyList(newItem);
    setEmergency(inputValue);
  };

  return (
    <>
      <Typography
        variant={"h3"}
        align={"center"}
        value={"Central de Emergencias"}
      />
      <div
        style={{
          display: "flex",
          padding: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant={"p"} value={"Emergencias"} />
        <form onSubmit={onSubmit}>
          <TextField
            id={"input"}
            placeholder={"Ingresa un emergencia..."}
            onChange={onInputChange}
            value={inputValue}
          />
        </form>
        <Button
          content={"Ingresar"}
          color={"primary"}
          variant={"contained"}
          onClick={onSubmit}
        />
      </div>
    </>
  );
};
