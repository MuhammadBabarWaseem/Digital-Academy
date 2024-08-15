import { Grid, styled, Toolbar } from "@mui/material";

import { LayoutProps } from "../types/interface";

import Header from "../components/Header";
import SideNav from "../components/Sidebar";
import useScreenSize from "../hooks/useScreenSize";

const Root = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
}));

const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: "#F2F5FB",
}));

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isXsOnly } = useScreenSize();
  return (
    <Root>
      <Header />
      <Grid
        mt={6}
        position={isXsOnly ? "fixed" : "relative"}
        height="100%"
        bgcolor="white"
        zIndex={99}
      >
        <SideNav />
      </Grid>
      <Main
        sx={{ width: isXsOnly ? "70%" : "auto", ml: isXsOnly ? "14%" : "auto" }}
      >
        <Toolbar />
        {children}
      </Main>
    </Root>
  );
};

export default Layout;
