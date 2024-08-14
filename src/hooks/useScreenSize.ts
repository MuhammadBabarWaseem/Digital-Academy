import { useTheme, useMediaQuery } from "@mui/material";

const useScreenSize = () => {
  const theme = useTheme();

  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isXsScreen = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));
  const isLessMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isGreaterThanMedium = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return {
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
    isXsScreen,
    isGreaterThanMedium,
    isLessMediumScreen
  };
};

export default useScreenSize;
