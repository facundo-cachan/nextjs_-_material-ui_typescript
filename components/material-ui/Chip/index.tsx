import Chip from "@mui/material/Chip";
import { ClassNameMap } from "@mui/styles";

import { optionsProps } from "../index";
import styles from "./styles";

const ChipBasic = ({ handleClick, options }: optionsProps) => {
  const pageStyles: ClassNameMap<string> = styles();

  return (
    <div className={pageStyles.container}>
      {options.map((option, i) => (
        <Chip
          onClick={handleClick}
          className={pageStyles.chip}
          key={i}
          label={option.name}
          variant="outlined"
        />
      ))}
    </div>
  );
};

export default ChipBasic;
