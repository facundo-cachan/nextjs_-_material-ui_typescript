import React from "react";
import Image from "next/image";

import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

import { ClassNameMap } from "@mui/styles";

import { optionsProps } from "../index";
import styles from "./styles";

const ImageCheckbox = ({ register, options }: optionsProps) => {
  const pageStyles: ClassNameMap<string> = styles();

  return (
    <div className={pageStyles.container}>
      {options.map((option, i) => (
        <div key={i} className={pageStyles.imageCheckbox}>
          <Image
            alt={option.name}
            src={option.name}
            width={330}
            height={96}
            className={pageStyles.image}
            layout="responsive"
          />
          <Typography className={pageStyles.label}>{option.name}</Typography>
          <Checkbox className={pageStyles.checkbox} />
        </div>
      ))}
    </div>
  );
};

export default ImageCheckbox;
