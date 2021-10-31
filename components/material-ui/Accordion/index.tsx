import * as React from "react";
import {
  Accordion as AccordionMU,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import Checkbox from "../Checkbox";

export type optionProps = {
  value: string;
  name: string;
};

export type optionsProps = {
  label: string;
  options: Array<optionProps>;
};

export type accordionProps = {
  options: Array<optionsProps>;
};

const Accordion = ({ options }: accordionProps) => {
  return (
    <div>
      {options.map((accordion: optionsProps, i: number) => (
        <AccordionMU key={i}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography>{accordion.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Checkbox options={accordion.options} />
          </AccordionDetails>
        </AccordionMU>
      ))}
    </div>
  );
};

export default Accordion;
