import React from "react";
import { ClassNameMap } from "@mui/styles";
import DefaultSelect from "../Select";
import Typography from "@mui/material/Typography";

import useStyles from "styles/pages";

import { optionProps } from "../index";

export type optionsProps = {
  label: string;
  options: Array<optionProps>;
};

export type priceRangeSelectorProps = {
  title: string;
  register?: any;
  from: optionsProps;
  to: optionsProps;
};

const PriceRangeSelector = ({
  title,
  to,
  from,
  register,
}: priceRangeSelectorProps) => {
  const classes: ClassNameMap<string> = useStyles();

  return (
    <div>
      <Typography className={classes.thirdText}>{title}</Typography>
      <DefaultSelect
        register={register}
        label={from.label}
        options={from.options}
      />
      <DefaultSelect
        register={register}
        label={to.label}
        options={to.options}
      />
    </div>
  );
};

export default PriceRangeSelector;
