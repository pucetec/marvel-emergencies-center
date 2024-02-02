import Typography from "../../common/Typography/Typography";
import AssignedGrid from "../Grid/AssignedGrid";

export const AssignedList = () => {
  const styles = {
    paddingLeft: "115px",
    paddingRight: "100px",
    paddingTop: "1%",
    paddingBottom: "1%",
  };
  return (
    <>
      <Typography
        variant={"h3"}
        align={"center"}
        value={"Emergencias asignadas"}
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
          value={"Héroe"}
          style={styles}
        />
        <Typography
          variant={"h5"}
          align={"center"}
          value={"Acciones"}
          style={styles}
        />
      </div>
      <AssignedGrid />
    </>
  );
};
