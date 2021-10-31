import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ClassNameMap } from "@mui/styles";

import { optionsProps } from "../index";
import styles from "./styles";

const DefaultSelect = ({
  label,
  selected,
  options,
  register,
}: optionsProps) => {
  const pageStyles: ClassNameMap<string> = styles();

  return (
    <FormControl variant="outlined" className={pageStyles.select}>
      <InputLabel id="select-name">{label}</InputLabel>
      <Select
        labelId="select-name"
        id="demo-simple-select-helper"
        value={selected}
        label={label}
        {...register("measure", {
          required: "Campo obligatorio.",
        })}
      >
        {options.map((option, i) => (
          <MenuItem key={i} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DefaultSelect;
