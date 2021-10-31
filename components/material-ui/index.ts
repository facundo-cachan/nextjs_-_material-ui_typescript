import { FunctionComponent } from "react";
import Accordion from "./Accordion";
import * as Carousel from "./Carousel";
import Checkbox from "./Checkbox";
import * as Buttons from "./Buttons";
import Footer, { siteConfigurationProps } from "./Footer";
import TopBar from "./Menu";
import * as Radios from "./Radios";
import * as Modals from "./Modals";
import { PopUp } from "./PopUp";
import DefaultSelect from "./Select";
import ChipBasic from "./Chip";
import MeasureDistance from "./MeasureDistance";
import ImageCheckbox from "./ImageCheckbox";
import PriceRangeSelector from "./PriceRangeSelector";
import { ClassNameMap } from "@mui/material/styles";

export type QuestionProps = {
  id: string;
  text: string;
  component?: FunctionComponent;
};

export type DataProps = {
  label: string;
  subtitle: string;
  questions?: Array<QuestionProps>;
};

export type StepsProps = {
  classes?: ClassNameMap;
  data: DataProps;
  lowerStep?: number;
  lowerStepLabel?: string;
  stepId: number | string;
  upperStep?: number;
};

export type optionProps = {
  value: string;
  name: string;
  image?: string;
};

export type optionsProps = {
  label?: string;
  selected?: string;
  handleClick?: () => void;
  options: Array<optionProps>;
  register?: any;
};

export {
  Accordion,
  Buttons,
  Carousel,
  Checkbox,
  ChipBasic,
  DefaultSelect,
  Footer,
  ImageCheckbox,
  TopBar,
  Radios,
  MeasureDistance,
  Modals,
  PopUp,
  PriceRangeSelector,
};
export type { siteConfigurationProps };
