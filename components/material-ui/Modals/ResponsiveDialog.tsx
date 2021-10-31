/* eslint-disable react/prop-types */
import { forwardRef, FunctionComponent, ReactElement, Ref } from "react";

import cls from "classnames";

import { ClassNameMap, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";

import { MaterialUI } from "components";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
/**
 * `Component Responsive Dialog`.
 * @param {string} stepId id for context.
 * @param {string} id id of component.
 * @param {string} title to show.
 * @param {Element} children optional React Element.
 * @param {object} classes optionals {dialog, title, content, text, btnPrimary, btn02}.
 * @return {FunctionComponent} Component Responsive Dialog.
 */
type DialogProps = {
  id: string;
  buttons: {
    primary: string;
    href?: string;
    secondary?: string;
  };
  title?: string;
  children?: any;
  classes?: ClassNameMap<string>;
  show: boolean;
  handleClose?: () => void;
};
const useStyles = makeStyles((theme: Theme) => ({
  btn01: {
    textAlign: "center",
    width: "100%",
  },
  dialog: {
    backdropFilter: "blur(12px)",
  },
  actions: {
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  btn02: {
    backgroundColor: theme.palette.error.main,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      padding: theme.spacing(2, 7),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
      padding: theme.spacing(1, 0),
      width: "80%",
    },
  },
  content: {
    background: theme.palette.background.default,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      height: "70%",
      width: "25vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75vw",
      height: "65vh",
    },
  },
  title: {
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      padding: theme.spacing(2, 0),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
      padding: theme.spacing(1, 0),
      width: "80%",
    },
  },
}));
const ResponsiveDialog: FunctionComponent<DialogProps> = ({
  id,
  buttons,
  title,
  children,
  classes,
  show,
  handleClose,
}) => {
  const defaultStyle = useStyles();
  return (
    <Dialog
      id={id}
      open={show}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby={title}
      aria-describedby={title}
      className={cls(classes?.dialog, defaultStyle.dialog)}
    >
      <DialogContent className={cls(defaultStyle.content, classes?.content)}>
        {title && (
          <DialogContentText
            className={cls(defaultStyle.title, classes?.title)}
          >
            {title}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
      <DialogActions className={cls(defaultStyle.actions, classes?.actions)}>
        {buttons.href ? (
          <MaterialUI.Buttons.Linked
            href={buttons.href}
            text={buttons.primary}
            className={cls(defaultStyle.btn01, classes?.btn01)}
          />
        ) : (
          <Button
            onClick={handleClose}
            className={cls(defaultStyle.btn01, classes?.btn01)}
          >
            {buttons?.primary}
          </Button>
        )}
        {buttons?.secondary && (
          <Button
            onClick={handleClose}
            color="primary"
            className={cls(defaultStyle.btn01, classes?.btn02)}
          >
            {buttons?.secondary}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default ResponsiveDialog;
