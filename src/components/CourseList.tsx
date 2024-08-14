import React from 'react';

import { CircularProgress, Grid, Paper, Typography } from '@mui/material';

import { coursesData } from '../utils/dummyData';

const CourseList: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {coursesData.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">{course.title}</Typography>
            <Typography variant="body2">{course.videos} Videos</Typography>
            <Typography variant="body2">{course.time}</Typography>
            <CircularProgress variant="determinate" value={course.progress} />
            <Typography>{course.progress}%</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;
