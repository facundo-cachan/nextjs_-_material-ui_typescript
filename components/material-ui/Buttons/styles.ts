import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: "#B7C158",
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}));
