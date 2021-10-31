import Image from "next/image";
import { useEffect } from "react";
import { MaterialUI } from "components";
import { useAppContext } from "utils/context";

import useStyles from "./steppers/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ClassNameMap } from "@mui/styles";

const ViviendaTipo = ({
  stepId,
  upperStep,
  lowerStep,
  data,
  classes,
}: MaterialUI.StepsProps) => {
  const pageStyles: ClassNameMap<string> = useStyles();
  const { setStepTop, setStepBottom } = useAppContext();
  const { label } = data as MaterialUI.DataProps;
  useEffect(() => {
    setStepTop(upperStep);
    setStepBottom(lowerStep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upperStep, lowerStep]);
  return (
    <Grid container>
      <Grid component={Box} item md={6} display={{ xs: "none", lg: "block" }}>
        <Image
          alt={label}
          src="/img/onboard/home_remodel.svg"
          width={600}
          height={500}
          quality={100}
        />
      </Grid>
      <Grid item xs={12} md={6} className={pageStyles.boxStepRight}>
        <MaterialUI.Radios.Grouped
          stepId={stepId}
          data={data}
          classes={classes}
        />
      </Grid>
    </Grid>
  );
};

export default ViviendaTipo;
