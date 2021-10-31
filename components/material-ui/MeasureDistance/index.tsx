import React from "react";
import { useForm } from "react-hook-form";
import { ClassNameMap } from "@mui/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { MaterialUI } from "components";

import styles from "./styles";
import useStyles from "styles/pages";
import cls from "classnames";

const OPTIONS_MOCKUP = [
  {
    value: "Kilómetros (km)",
    name: "Kilómetros (km)",
  },
  {
    value: "Metros (m)",
    name: "Metros (m)",
  },
];

type MeasureProps = {
  isOtherPlace?: boolean;
};

const MeasureDistance = ({ isOtherPlace }: MeasureProps) => {
  const pageStyles: ClassNameMap<string> = styles();
  const classes: ClassNameMap<string> = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onClick = (data: any) => {};

  return (
    <div className={pageStyles.background}>
      <div className={pageStyles.container}>
        <Typography className={classes.secondaryText}>
          Elige el dato a considerar:
        </Typography>

        {isOtherPlace && (
          <div>
            <TextField
              className={pageStyles.input}
              variant="outlined"
              margin="normal"
              required
              type="placeName"
              id="placeName"
              label="Nombre del lugar"
              error={!!errors.placeName}
              helperText={errors.placeName?.message}
              {...register("placeName", {
                required: "Campo obligatorio.",
              })}
            />
          </div>
        )}

        <FormControl component="fieldset">
          <RadioGroup name="radio-buttons-group" row>
            <FormControlLabel
              value="Distancia"
              control={<Radio />}
              label="Distancia"
            />
            <FormControlLabel
              value="Tiempo promedio (en coche)"
              control={<Radio />}
              label="Tiempo promedio (en coche)"
            />
          </RadioGroup>
        </FormControl>

        <div className={pageStyles.row}>
          <TextField
            className={pageStyles.input}
            variant="outlined"
            margin="normal"
            required
            type="number"
            id="number"
            label="Número"
            error={!!errors.number}
            helperText={errors.number?.message}
            {...register("number", {
              required: "Campo obligatorio.",
            })}
          />
          <MaterialUI.DefaultSelect
            options={OPTIONS_MOCKUP}
            register={register}
          />
        </div>

        <div className={pageStyles.row}>
          <MaterialUI.Buttons.Default
            handler={handleSubmit(onClick)}
            text="CANCELAR"
            className={cls(classes.btn01, pageStyles.button)}
          />

          <MaterialUI.Buttons.Default
            handler={handleSubmit(onClick)}
            text="GUARDAR"
            className={cls(classes.btn01, pageStyles.button)}
          />
        </div>
      </div>
    </div>
  );
};

export default MeasureDistance;
