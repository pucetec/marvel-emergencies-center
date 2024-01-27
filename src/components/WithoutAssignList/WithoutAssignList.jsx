import { useState } from "react";
import Typography from "../../common/Typography/Typography";
import Grid from "../../common/Grid/AssignGrid";
import DeleteIcon from "@mui/icons-material/Delete";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

const firstHeroesList = [
  {
    id: 1,
    name: "Test",
    etc: <CenterFocusStrongIcon fontSize="large" />,
    etc2: <DeleteIcon fontSize="large" />,
  },
  {
    id: 2,
    name: "Test2",
    etc: <CenterFocusStrongIcon fontSize="large" />,
    etc2: <DeleteIcon fontSize="large" />,
  },
];
const headerList = [{ label: "#" }];

export const WithoutAssignList = () => {
  const [heroesList, setHeroesList] = useState([]);

  const styles = {
    paddingLeft: "105px",
    paddingRight: "105px",
  };
  return (
    <>
      <Typography
        variant={"h3"}
        align={"center"}
        value={"Emergencias sin asignar"}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant={"h5"}
          align={"center"}
          value={"#"}
          style={styles}
        />
        <Typography
          variant={"h5"}
          align={"center"}
          value={"Emergencia"}
          style={styles}
        />
        <Typography
          variant={"h5"}
          align={"center"}
          value={"Acciones"}
          style={styles}
        />
      </div>
      <Grid items={firstHeroesList} xs={3} md={3} xl={3} />
    </>
  );
};
