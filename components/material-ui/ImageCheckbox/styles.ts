import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "wrap",
    },
  },
  imageCheckbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 96,
    borderRadius: 8,
    margin: theme.spacing(1),
    boxShadow: "1px 4px 6px 0px #00000029",
    "&:active": {
      border: `1px solid ${theme.palette.text.primary}`,
      boxShadow: "unset",
      backgroundColor: "#e4d9f8",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      width: 150,
      height: 150,
    },
  },
  image: {
    width: "35%",
    height: 96,
    objectFit: "cover",
    borderRadius: "8px 0px 0px 8px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      borderRadius: "8px 8px 0px 0px",
      width: "100%",
      height: 100,
    },
  },
  label: {
    textTransform: "uppercase",
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 12,
    },
  },
  checkbox: {
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
    },
  },
}));

export default styles;
