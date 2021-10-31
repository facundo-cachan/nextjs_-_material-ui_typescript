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
  button: {
    width: "100%",
    height: 50,
    margin: 15,
    color: "#2D1674",
    fontSize: 16,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "1px 4px 6px 0px #00000029",
    backgroundColor: "#FFFFFF",
    width: "fit-content",
    padding: 35,
    borderRadius: 10,
    margin: 30,
    zIndex: 4,
    [theme.breakpoints.up("sm")]: {
      width: 700,
      height: "90vh",
    },
  },
  text: {
    textAlign: "center",
  },
}));

export { styles };
