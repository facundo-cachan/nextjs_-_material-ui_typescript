/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Image from "next/image";

import cls from "classnames";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { Theme } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";

/**
 * `Carousel Swipeable`.
 * @param {object} arrImgs - Array of images.
 *  @param {string} className - Optional styles.
 * @return {HTMLProps<HTMLElement>} Carousel.
 */

type ImgProps = {
  label: string;
  imgPath: string;
};
type ClassName = {
  carousel: string;
  carouselView: string;
  carouselArrows: string;
  carouselArrowIcon: string;
  carouselSwipper: string;
  dotContainer: string;
  dot: string;
  carouselText: string;
};
type Sizes = {
  width: number;
  height: number;
};
export type CarouselProps = {
  arrImgs: Array<ImgProps>;
  sizes: Sizes;
  className: ClassName;
};
const useStyles = makeStyles((theme: Theme) => ({
  carousel: {
    "text-align": "-webkit-center",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  carouselArrows: {
    [theme.breakpoints.up("sm")]: { marginTop: "35%" },
    [theme.breakpoints.down("sm")]: { display: "none" },
  },
  carouselArrowIcon: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.text.primary,
    borderRadius: "50%",
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
      height: 22,
      width: 22,
    },
  },
  carouselText: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
      textAlign: "center",
    },
  },
  dotContainer: {
    display: "flex",
    justifyContent: "center",
    height: 8,
  },
  dot: {
    background: "#D9D9D9 0% 0% no-repeat padding-box",
    borderRadius: "50%",
    height: 8,
    opacity: 1,
    marginRight: 8,
    width: 8,
  },
}));
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Swipeable = ({
  arrImgs,
  className,
  sizes,
}: CarouselProps): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [images, setImages] = useState<Array<ImgProps>>([]);
  useEffect(() => {
    setImages(arrImgs);
  }, [arrImgs]);
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const back = () => {
    setActiveStep(activeStep - 1);
  };
  const next = () => {
    setActiveStep(activeStep + 1);
  };
  return images.length ? (
    <div className={cls(classes.carousel, className?.carousel)}>
      <div className={className?.carouselSwipper}>
        <Button
          className={cls(classes.carouselArrows, className?.carouselArrows)}
          style={{ float: "left" }}
          onClick={back}
          disabled={activeStep === 0}
        >
          <ArrowLeftIcon
            className={cls(
              classes.carouselArrowIcon,
              className?.carouselArrowIcon
            )}
          />
        </Button>
        <Button
          className={cls(classes.carouselArrows, className?.carouselArrows)}
          style={{ float: "right" }}
          onClick={next}
          disabled={activeStep === images.length - 1}
        >
          <ArrowRightIcon
            className={cls(
              classes.carouselArrowIcon,
              className?.carouselArrowIcon
            )}
          />
        </Button>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className={className?.carouselView}
        >
          {images.map(({ label, imgPath }: ImgProps, index: number) =>
            Math.abs(activeStep - index) <= 2 ? (
              <Image
                key={index}
                src={imgPath}
                alt={label}
                width={sizes?.width || 100}
                height={sizes?.height || 100}
                quality={100}
              />
            ) : (
              <CircularProgress key={index} />
            )
          )}
        </AutoPlaySwipeableViews>
      </div>
      <Typography
        className={
          className && cls(classes.carouselText, className?.carouselText)
        }
      >
        {images[activeStep]?.label}
      </Typography>
      <div className={cls(classes.dotContainer, className?.dotContainer)}>
        {Array.from({ length: images.length }, (_, i) => i).map((d) => (
          <div
            key={d}
            className={cls(classes.dot, d === activeStep && className?.dot)}
          />
        ))}
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};
export default Swipeable;
