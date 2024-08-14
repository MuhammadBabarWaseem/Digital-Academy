import { useTheme, useMediaQuery } from "@mui/material";

const useScreenSize = () => {
  const theme = useTheme();

  const isXsDown = useMediaQuery(theme.breakpoints.down("xs")); // max-width: 599.95px
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // max-width: 959.95px
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // max-width: 1279.95px
  const isLgDown = useMediaQuery(theme.breakpoints.down("lg")); // max-width: 1919.95px
  const isXlDown = useMediaQuery(theme.breakpoints.down("xl")); // max-width: ∞

  const isXsOnly = useMediaQuery(theme.breakpoints.only("xs")); // width: 0-599.95px
  const isSmOnly = useMediaQuery(theme.breakpoints.only("sm")); // width: 600-959.95px
  const isMdOnly = useMediaQuery(theme.breakpoints.only("md")); // width: 960-1279.95px
  const isLgOnly = useMediaQuery(theme.breakpoints.only("lg")); // width: 1280-1919.95px
  const isXlOnly = useMediaQuery(theme.breakpoints.only("xl")); // width: 1920px+

  const isXsUp = useMediaQuery(theme.breakpoints.up("xs")); // min-width: 0px
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm")); // min-width: 600px
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // min-width: 960px
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg")); // min-width: 1280px
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl")); // min-width: 1920px

  const isXsToSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isXsToMd = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const isSmToMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdToLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLgToXl = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  return {
    isXsDown,
    isSmDown,
    isMdDown,
    isLgDown,
    isXlDown,
    isXsOnly,
    isSmOnly,
    isMdOnly,
    isLgOnly,
    isXlOnly,
    isXsUp,
    isSmUp,
    isMdUp,
    isLgUp,
    isXlUp,
    isXsToSm,
    isXsToMd,
    isSmToMd,
    isMdToLg,
    isLgToXl,
  };
};

export default useScreenSize;
