import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { unit } from "styles/theme";
export default makeStyles((theme: Theme) => ({
  iconBtn: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(3),
    },
  },
  icon: {
    color: theme.palette.text.primary,
  },
  accountCircle: {
    color: "#C7BEBE",
    fontSize: theme.typography.h4.fontSize,
  },
  inputRoot: {
    color: "inherit",
  },
  sectionDesktop: {
    display: "flex",
  },
  sectionMobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuText: {
    color: "#8A5DE3",
    [theme.breakpoints.up("sm")]: {
      fontSize: `calc(${theme.typography.h6.fontSize} - 0.2${unit})`,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  question: {
    backgroundColor: "#8A5DE31C",
    fontSize: `calc(${theme.typography.h6.fontSize} - 0.3${unit})`,
    width: "fill-content",
  },
}));
