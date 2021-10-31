import { createTheme } from "@mui/material/styles";
/* 
import createBreakpoints from "@mui/material/styles/createBreakpoints";
const customBreakpointValues = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
const breakpoints = createBreakpoints({ ...customBreakpointValues });
 */
const primaryColor = "#2D1674";
const secondaryColor = "#D0DC64";
const background = "#fff";
export const unit: string = "em";
const theme = createTheme({
  direction: "rtl",
  palette: {
    text: {
      primary: primaryColor,
      secondary: background,
    },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: "#FF3A3A",
    },
    background: {
      default: background,
      paper: "#E4D9F8",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(),
    body1: {
      fontWeight: 400,
    },
    h1: {
      fontSize: `5${unit}`,
    },
    h2: {
      fontSize: `4${unit}`,
    },
    h3: {
      fontSize: `3${unit}`,
    },
    h4: {
      fontSize: `2${unit}`,
    },
    h5: {
      fontSize: `1.5${unit}`,
    },
    h6: {
      fontSize: `1${unit}`,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: background,
          borderBottom: "1px solid #D9D9D9",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paperScrollPaper: {
          width: "min-content",
        },
        paperWidthMd: {
          backgroundColor: background,
        },
        paperWidthSm: {
          backgroundColor: background,
        },
        paperWidthLg: {
          backgroundColor: background,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&$notchedOutline": {
            borderColor: "#FF3A3A",
          },
          "&error $notchedOutline": {
            borderColor: "#FF3A3A",
          },
          "&$error": {
            borderColor: "#FF3A3A",
          },
        },
        input: {
          padding: `1${unit}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "",
          },
          textTransform: "none",
          padding: 1,
          minWidth: 10,
        },
        iconSizeMedium: {
          fontSize: `3${unit}`,
        },
        /*
        label: {
        fontWeight: 600,
      },
        text: {
          padding: 0,
        },
         */
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        groupedTextPrimary: {
          "&:not(:last-child)": {
            border: "none",
          },
        },
        groupedTextHorizontal: {
          "&:not(:last-child)": {
            border: "none",
          },
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: primaryColor,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          height: `1${unit}`,
          marginLeft: 5,
          marginRight: 5,
          verticalAlign: "middle",
          width: `1${unit}`,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          verticalAlign: "middle",
        },
        marginNormal: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&$error": {
            color: "red",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 400,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          height: `3${unit}`,
        },
        input: {
          fontWeight: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000",
          "&$error": {
            color: "red",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#000",
        },
        colorSecondary: {
          color: "#000",
          "&$checked": {
            color: primaryColor,
          },
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        horizontal: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primaryColor,
          /* padding: 0, */
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 10,
        },
        barColorPrimary: {
          backgroundColor: "#D0DC64",
        },
        colorPrimary: {
          backgroundColor: "#8B7EB5",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: background,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: `2${unit}`,
        },
      },
    },
  },
});
export default theme;
