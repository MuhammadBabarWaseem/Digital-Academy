import { Grid } from '@mui/material';

import CourseDescription from '../components/CourseDetail';
import UserProfile from '../components/UserProfile';
import useScreenSize from '../hooks/useScreenSize';
import Layout from '../layout/main';

const CourseDetails = () => {
  const { isLgUp } = useScreenSize();
  return (
    <Layout>
      <Grid container spacing={3} direction={isLgUp ? "row" : "column"}>
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
