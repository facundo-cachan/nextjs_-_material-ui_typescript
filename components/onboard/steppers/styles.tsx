import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
const bottomLineColor = "#8B7EB5";
const bgColor = "#D0DC64";
export default makeStyles((theme: Theme) => ({
  stepper: {
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(-3.3, 0, 0, "33%"),
      width: "33%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(6),
      width: "100%",
    },
  },
  stepsContainer: {
    display: "flex",
    height: 10,
    justifyContent: "space-between",
  },
  stepBox: {
    "text-align": "-webkit-center",
  },
  step: {
    height: 5,
  },
  stepperBottom: {
    width: "100%",
  },
  stepperBottomDot: {
    backgroundColor: bottomLineColor,
    borderRadius: 50,
    color: "#635395",
    /* fontSize: theme.typography.h5.fontSize, */
    height: 30,
    top: -10,
    width: 30,
  },
  stepperBottomDotActivated: {
    backgroundColor: bgColor,
    color: "#2D1674",
  },
  linearProgress: {
    top: 10,
    /* backgroundColor: bottomLineColor, */
    marginLeft: "1%",
    zIndex: -1,
    width: "98%",
  },
  bar: {
    backgroundColor: bgColor,
    zIndex: -1,
  },
  lowerStepLabel: {
    color: "#B498E9",
    zIndex: 99,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  lowerStepLabelSelected: {
    color: theme.palette.text.secondary,
  },
  boxStepRight: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(20),
    },
  },
}));
