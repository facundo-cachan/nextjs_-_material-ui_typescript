import Button from "@mui/material/Button/Button";

import useStyles from "./styles";

type BtnDefaultProps = {
  endIcon?: JSX.Element;
  text: string;
  startIcon?: JSX.Element;
  className?: string;
  handler: () => void;
};

/**
 * `Button Start Default` can assign icon (back or/and front) to it, and className.
 * @param {JSX.Element} endIcon optional, icon show in after text.
 * @param {string} text label.
 * @param {JSX.Element} startIcon optional, icon show in before text.
 * @param {className} className optional, custom styles from parent component.
 * @param {void} handler action on click.
 * @returns {JSX.Element} Button with optionals styles and icons.
 */

const BtnStart = ({
  endIcon,
  text,
  startIcon,
  className,
  handler,
}: BtnDefaultProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Button
      endIcon={endIcon}
      startIcon={startIcon}
      className={className ? className : classes.root}
      onClick={handler}
    >
      {text}
    </Button>
  );
};

export default BtnStart;
