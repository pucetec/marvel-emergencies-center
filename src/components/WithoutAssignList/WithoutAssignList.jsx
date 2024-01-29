import Typography from "../../common/Typography/Typography";
import EmergencyGrid from "../Grid/AssignGrid";
import { useMarvelAPI } from "../../contexts/HeroContext";

export const WithoutAssignList = () => {
  const { emergencyList } = useMarvelAPI();

  const styles = {
    paddingLeft: "105px",
    paddingRight: "105px",
    paddingTop: "1%",
    paddingBottom: "1%",
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
      <EmergencyGrid items={emergencyList} xs={3} md={3} xl={3} />
    </>
  );
};
