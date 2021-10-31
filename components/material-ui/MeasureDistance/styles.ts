import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme: Theme) => ({
  background: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#fafafa",
    zIndex: 4,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 400,
    boxShadow: "1px 4px 6px 0px #00000029",
    backgroundColor: theme.palette.text.secondary,
    width: "fit-content",
    padding: theme.spacing(2),
    borderRadius: 10,
    margin: theme.spacing(2),
    zIndex: 4,
    [theme.breakpoints.up("sm")]: {
      width: 700,
    },
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default styles;
