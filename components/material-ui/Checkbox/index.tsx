import React from "react";
import {
  Checkbox as CheckboxMU,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

// import { ClassNameMap } from '@mui/styles/withStyles';

import { optionsProps } from "../index";
// import styles from './styles';

const Checkbox = ({ register, options }: optionsProps) => {
  // const pageStyles: ClassNameMap<string> = styles();

  return (
    <FormGroup>
      {options.map((option, i) => (
        <FormControlLabel
          key={i}
          control={<CheckboxMU color="primary" />}
          label={option.name}
          // {...register(option.value)}
        />
      ))}
    </FormGroup>
  );
};

export default Checkbox;
