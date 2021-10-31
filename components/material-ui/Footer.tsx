import { FunctionComponent, useMemo } from "react";
import cls from "classnames";

import { useSession } from "next-auth/client";

import { ClassNameMap, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

import { Box, Grid, Typography } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Custom, MaterialUI } from "..";
import useStyles from "../../styles/pages";

/**
 * `Footer Component`.
 * @param {object} networks data.
 * @param {object} classes styles.
 * @return {JSX.Element} Footer.
 */

enum SNIcon {
  "email",
  "whatsapp",
  "facebook",
  "instagram",
  "youtube",
}
type NetworksProps = {
  name: string;
  icon: SNIcon;
  path: string;
};
export type siteConfigurationProps = {
  siteName: string;
  copyright: string;
  socialnetworkSet?: Array<NetworksProps>;
};
type SiteConfiguration = {
  siteConfiguration: siteConfigurationProps;
};
type IconsList = {
  email: JSX.Element;
  whatsapp: JSX.Element;
  facebook: JSX.Element;
  instagram: JSX.Element;
  youtube: JSX.Element;
};
const styles = makeStyles((theme: Theme) => ({
  br: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  contactUs: {
    color: theme.palette.background.default,
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  footer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  footerFirst: {
    backgroundImage: "url(./img/footer.svg)",
    backgroundColor: "#B498E9",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      height: 325,
    },
    [theme.breakpoints.down("sm")]: {
      height: 210,
    },
  },
  primaryText: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: "25%",
      paddingTop: 50,
      paddingBottom: 50,
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: 500,
      marginLeft: "15%",
      paddingTop: 15,
      paddingBottom: 30,
      width: "70%",
    },
  },
  footerSecond: {
    backgroundColor: theme.palette.text.primary,
    textAlign: "center",
    paddingTop: theme.spacing(4),
  },
  footerNetworkContainer: {
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(2, 0, 0, "12vw"),
      width: "75vw",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNetworkText: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
      paddingLeft: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9em",
      textAlign: "left",
      width: "50%",
    },
  },
  footerCopyRight: {
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
    marginTop: theme.typography.h4.fontSize,
    paddingBottom: theme.typography.h4.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  footerCtaForm: {
    height: 45,
    marginTop: "2rem",
    marginLeft: "5%",
    borderRadius: 5,
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 80,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white",
      border: "2px solid #635395",
      paddingTop: ".3rem",
    },
  },
  footerCtaFormTextField: {
    paddingRight: 30,
    width: "auto",
  },
  btn01: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 10),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.5, 12),
    },
  },
  icon: {
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  nsIcon: {
    color: "#B498E9",
    fontSize: theme.typography.h5.fontSize,
  },
}));
const Footer: FunctionComponent<SiteConfiguration> = ({
  siteConfiguration,
}: SiteConfiguration) => {
  const [session] = useSession();
  const classes: ClassNameMap<string> = useStyles();
  const pageStyles: ClassNameMap<string> = styles();
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const { siteName, copyright, socialnetworkSet } =
    siteConfiguration as siteConfigurationProps;
  const icons: IconsList = useMemo(() => {
    return {
      email: <EmailIcon className={pageStyles.nsIcon} />,
      whatsapp: <WhatsAppIcon className={pageStyles.nsIcon} />,
      facebook: <FacebookIcon className={pageStyles.nsIcon} />,
      instagram: <InstagramIcon className={pageStyles.nsIcon} />,
      youtube: <YouTubeIcon className={pageStyles.nsIcon} />,
    };
  }, [siteConfiguration]);
  return (
    <footer className={pageStyles.footer}>
      <Box className={pageStyles.footerFirst}>
        <Typography
          className={cls(classes.primaryText, pageStyles.primaryText)}
        >
          ¿Estás listo para coincidir con el{" "}
          <span style={{ fontWeight: 800 }}>hogar de tus sueños?</span>
        </Typography>
        <MaterialUI.Buttons.Linked
          href={session ? "/profile" : "login"}
          text="COMIENZA"
          endIcon={<ArrowForward className={classes.icon} />}
          className={cls(classes.btn01, pageStyles.btn01)}
        />
      </Box>
      <Box className={pageStyles.footerSecond}>
        <Custom.LogoUngga size={matches ? 130 : 90} />
        <Typography className={pageStyles.contactUs}>¡CONTÁCTANOS!</Typography>
        <Grid container className={pageStyles.footerNetworkContainer}>
          {socialnetworkSet?.map(
            ({ name, icon, path }: NetworksProps, index: number) => (
              <MaterialUI.Buttons.Linked
                newTab
                className={pageStyles.footerNetworkText}
                key={index}
                href={path}
                text={name}
                // @ts-ignore
                /* startIcon={icons[icon]} */
              />
            )
          )}
        </Grid>
        <Typography className={pageStyles.footerCopyRight}>
          © {new Date().getFullYear()} {siteName}.
          <br className={pageStyles.br} /> {copyright}
        </Typography>
      </Box>
    </footer>
  );
};
export default Footer;
