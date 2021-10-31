import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  chip: {
    width: "fit-content",
    height: 34,
    cursor: "pointer",
    margin: theme.spacing(1),
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
    fontSize: theme.typography.h6.fontSize,
    textTransform: "uppercase",
    letterSpacing: 0.25,
    backgroundColor: theme.palette.secondary.main,
    "&:active": {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.down("sm")]: {
      width: 328,
    },
  },
}));

export default styles;
