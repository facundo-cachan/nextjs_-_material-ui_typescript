import { FunctionComponent } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CheckIcon from "@mui/icons-material/Check";

import cls from "classnames";

import { useAppContext } from "utils/context";
import useStyles from "./styles";
import { MaterialUI } from "components";
/**
 * `Stepper` .
 * @param {Array} data for render.
 * @returns {FunctionComponent} Stepper with optionals styles and icons.
 */
type StepperProps = {
  steps: Array<MaterialUI.StepsProps>;
};

const StepperBottom: FunctionComponent<StepperProps> = ({
  steps,
}: StepperProps) => {
  const classes = useStyles();
  const { stepBottom } = useAppContext();
  const percent = (stepBottom * 100) / steps.length;
  return (
    <div className={classes.stepperBottom}>
      <LinearProgress
        variant="determinate"
        value={percent}
        classes={{ root: classes.linearProgress, bar: classes.bar }}
      />
      <div className={classes.stepsContainer}>
        {steps.map(
          ({ lowerStepLabel }: MaterialUI.StepsProps, index: number) => (
            <Box key={index} className={classes.stepBox}>
              {stepBottom === index + 1 ? (
                <Avatar
                  className={cls(
                    classes.stepperBottomDot,
                    classes.stepperBottomDotActivated
                  )}
                >
                  {index + 1}
                </Avatar>
              ) : stepBottom >= index + 1 ? (
                <Avatar className={classes.stepperBottomDot}>
                  <CheckIcon
                    className={cls(
                      classes.stepperBottomDot,
                      classes.stepperBottomDotActivated
                    )}
                  />
                </Avatar>
              ) : (
                <Avatar className={classes.stepperBottomDot}>
                  {index + 1}
                </Avatar>
              )}
              <Typography
                className={cls(
                  classes.lowerStepLabel,
                  index === stepBottom - 1 && classes.lowerStepLabelSelected
                )}
              >
                {lowerStepLabel}
              </Typography>
            </Box>
          )
        )}
      </div>
    </div>
  );
};
export default StepperBottom;
