import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  gridTop: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  gridMiddle: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  backBtnMiddle: {
    textAlign: "left",
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  gridBottom: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 15, 0, 15),
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 5% 0 5%",
      width: "90%",
    },
  },
  btn: {
    borderRadius: 5,
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: theme.typography.h6.fontSize,
    height: theme.spacing(6),
    "&:hover": {
      backgroundColor: theme.palette.text.primary,
      boxShadow: "none",
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(0.5),
    },
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: "#B7C158",
    "&:hover": {
      backgroundColor: theme.palette.text.primary,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "4%",
    },
  },
  divider: {
    height: theme.spacing(0.5),
    margin: theme.spacing(3, 0, 2),
  },
  btnSignIn: {
    height: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(1.5, 0),
    },
  },
  btnSignOut: {
    height: theme.spacing(6),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2, 0, 2),
    },
  },
  textField: {
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      padding: theme.spacing(0),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      padding: 0,
      margin: 0,
    },
  },
  Facebook: {
    backgroundColor: "#3B5998",
    borderColor: "#0000001F",
    color: "#fff",
  },
  Google: {
    backgroundColor: "#fff",
    border: "1px solid #2D1674",
    color: "#2D1674",
  },
  remember: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
  },
  checkBoxText: {
    fontSize: theme.typography.h6.fontSize,
  },
  controlCheckbox: {
    alignItems: "center",
    display: "inline-flex",
    justifycontent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      width: "30%",
    },
  },
  /** ============== News global ==============  */
  screen: {
    width: "100vw",
    [theme.breakpoints.up("sm")]: {
      height: "95vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "105vh",
    },
  },
  primaryText: {
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h3.fontSize,
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
      marginTop: theme.spacing(1),
    },
  },
  secondaryText: {
    fontWeight: 600,
    marginTop: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  thirdText: {
    fontWeight: 500,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
      textAlign: "left",
      margin: theme.spacing(2, 0, 2),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9em",
      margin: theme.spacing(1, 0, 2),
    },
  },
  input: {
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(1, 0),
      padding: 0,
    },
  },
  /** -------------- BUTTONS --------------- */
  backBtnTop: {
    fontSize: theme.typography.h5.fontSize,
  },
  btn01: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    border: "1px solid #B7C158",
    borderRadius: 5,
    fontWeight: 700,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: "none",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
      padding: theme.spacing(1, 5),
    },
  },
  error: {
    color: "#FF3A3A",
    "&$error": {
      color: "#FF3A3A",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  disabled: {
    backgroundColor: "#8e8f89",
    borderColor: "#8e8f89",
    "&:hover": {
      backgroundColor: "#8e8f89",
      boxShadow: "none",
    },
  },
  icons: {
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7em",
    },
  },
}));
