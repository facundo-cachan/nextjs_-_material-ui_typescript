import Step from "@mui/material/Step";
import StepConnector from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { Theme } from "@mui/material/styles";

import { makeStyles, withStyles } from "@mui/styles";

import { useAppContext } from "utils/context";
import useStyles from "./styles";
/**
 * `Stepper` .
 * @param {Array} data for render.
 * @returns {JSX.Element} Stepper with optionals styles and icons.
 */

type StepperProps = {
  data: Array<any>;
  classes?: any;
};
const widthLine: number = 1;
const unitSizes: string = "rem";
const commonCustomIconAttributes = {
  borderRadius: "50%",
  borderStyle: "solid",
  width: `${widthLine}${unitSizes}`,
  height: `${widthLine}${unitSizes}`,
  zIndex: 25,
};
const TopConnector = withStyles((theme: Theme) => ({
  alternativeLabel: {
    zIndex: 20,
    top: `${widthLine * -0.02}${unitSizes}`,
    left: "-50%",
    right: "50%",
  },
  active: {
    "& $line": {
      borderColor: theme.palette.text.primary,
    },
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.text.primary,
    },
  },
  line: {
    borderColor: theme.palette.background.paper,
    borderWidth: `${widthLine}${unitSizes}`,
    zIndex: 20,
  },
}));
const topLabels = withStyles(
  {
    active: {
      "&$label": {
        fontWeight: 600,
        fontSize: "0.59rem",
        color: "#2D1674",
      },
    },
    completed: {
      "&$label": {
        fontWeight: 600,
        fontSize: "0.59rem",
        color: "#2D1674",
      },
    },
    label: {
      fontWeight: 600,
      fontSize: "0.59rem",
      color: "#2D1674",
    },
    labelContainer: {
      position: "relative",
      top: `-${widthLine + 3}${unitSizes}`,
    },
  },
  { name: "upperStepLabel2" }
);
const Icons = makeStyles((theme: Theme) => ({
  stepIcon: {
    ...commonCustomIconAttributes,
    borderColor: theme.palette.text.primary,
    backgroundColor: theme.palette.common.white,
  },
}));
const StepIcon = () => {
  const classes = Icons();
  return <div className={classes.stepIcon} />;
};
const TopStepperConnector = TopConnector(StepConnector);
const StepperTop = ({ data }: StepperProps): JSX.Element => {
  const classes = useStyles();
  const { stepTop } = useAppContext();
  const TopStepper = topLabels(StepLabel);
  return (
    <Stepper
      alternativeLabel
      activeStep={stepTop}
      connector={<TopStepperConnector />}
      className={classes.stepper}
    >
      {data.map((label, index) => (
        <Step key={index} className={classes.step}>
          <TopStepper StepIconComponent={StepIcon}>{label}</TopStepper>
        </Step>
      ))}
    </Stepper>
  );
};
export default StepperTop;
