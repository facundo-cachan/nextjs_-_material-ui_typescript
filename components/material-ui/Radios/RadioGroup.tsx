import { FunctionComponent, Fragment, ChangeEvent, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

import { MaterialUI } from "components";

import { useAppContext } from "utils/context";

/**
 * `Component Radio Grouped`.
 * @param {string} stepId id.
 * @param {object} data data.
 * @param {object} classes styles.
 * @return {FunctionComponent} Component Radio Grouped.
 */

const Grouped: FunctionComponent<MaterialUI.StepsProps> = ({
  stepId,
  data,
  classes,
}: MaterialUI.StepsProps) => {
  const { variableState, setVariableState } = useAppContext();
  const { label, subtitle, questions } = data as MaterialUI.DataProps;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVariableState({ onBoard: { [stepId]: event.target.defaultValue } });
  };
  useEffect(() => {
    setVariableState({ onBoard: { [stepId]: 0 } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <FormControl component="fieldset" className={classes?.fieldsetFormControl}>
      <RadioGroup
        aria-label={label}
        name={stepId as string}
        value={variableState}
        defaultValue={0}
        onChange={handleChange}
      >
        <Typography className={classes?.primaryText}>{label}</Typography>
        <Typography className={classes?.secondaryText}>{subtitle}</Typography>
        {questions &&
          questions.map(
            (
              { id, text, component: Component }: MaterialUI.QuestionProps,
              index: number
            ) => (
              <Fragment key={id}>
                <FormControlLabel
                  value={id}
                  control={
                    <Radio
                      classes={{
                        root: classes?.radioBtn,
                        checked: classes?.checked,
                      }}
                    />
                  }
                  label={text}
                  classes={{
                    root: classes?.radioLabelRoot,
                    label: classes?.fieldsetSubtitle,
                  }}
                  checked={index === 1}
                />
                {Component && variableState === id && <Component />}
              </Fragment>
            )
          )}
      </RadioGroup>
    </FormControl>
  );
};

export default Grouped;
