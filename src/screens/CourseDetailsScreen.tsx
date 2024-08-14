import { Grid } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";
import UserProfile from "../components/UserProfile";
import CourseDescription from "../components/CourseDetail";
import Layout from "../layout/main";

const CourseDetails = () => {
  const { isLargeScreen } = useScreenSize();
  return (
    <Layout>
      <Grid container spacing={3} direction={isLargeScreen ? "row" : "column"}>
        <Grid item xs={12} md={8.5}>
          <CourseDescription />
        </Grid>
        <Grid item xs={12} md={3}>
          <UserProfile isDetails />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CourseDetails;
