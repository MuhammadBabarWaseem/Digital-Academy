import { Grid, styled, Toolbar } from "@mui/material";

import { LayoutProps } from "../types/interface";

import Header from "../components/Header";
import SideNav from "../components/Sidebar";

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
  return (
    <Root>
      <Header />
      <Grid mt={6}>
        <SideNav />
      </Grid>
      <Main>
        <Toolbar />
        {children}
      </Main>
    </Root>
  );
};

export default Layout;
