import { Theme } from "@mui/material/styles";
import { ClassNameMap } from "@mui/styles";

import Image from "next/image";

import { MaterialUI } from "components";

import useStyles from "styles/pages";
import { styles } from "./styles";
import cls from "classnames";

import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

type PopUpProps = {
  title: string;
  subtitle: string;
  imagePath: string;
  onClick: () => void;
};

const PopUp = ({ title, subtitle, imagePath, onClick }: PopUpProps) => {
  const classes: ClassNameMap<string> = useStyles();
  const pageStyles: ClassNameMap<string> = styles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <div className={pageStyles.background}>
      <div className={pageStyles.container}>
        <Image
          alt=""
          src={imagePath}
          width={matches ? 550 : 300}
          height={matches ? 600 : 300}
        />
        <Typography className={cls(classes.primaryText, pageStyles.text)}>
          {title}
        </Typography>
        <Typography className={cls(classes.secondaryText, pageStyles.text)}>
          {subtitle}
        </Typography>
        <MaterialUI.Buttons.Default
          handler={onClick}
          text="ENTENDIDO"
          className={cls(classes.btn01, pageStyles.button)}
        />
      </div>
    </div>
  );
};

export { PopUp };
