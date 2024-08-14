import { Grid } from "@mui/material";
import UserProfile from "../components/UserProfile";
import Stats from "../components/Stats";
import LearningPaths from "../components/LearningPath";
import useScreenSize from "../hooks/useScreenSize";
import Layout from "../layout/main";

const Dashboard = () => {
  const { isLgUp } = useScreenSize();

  return (
    <Layout>
      <Grid container spacing={3} direction={isLgUp ? "row" : "column"}>
        <Grid item xs={12} md={9}>
          <Stats />
          <LearningPaths />
        </Grid>
        <Grid item xs={12} md={3}>
          <UserProfile />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
