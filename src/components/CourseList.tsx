import React from 'react';

import { CircularProgress, Grid, Paper, Typography } from '@mui/material';

import { Course } from '../types/interface';

const CourseList: React.FC = () => {
  const courses: Course[] = [
    { title: "Course 1 Title", videos: 6, time: "1hr 49min", progress: 78 },
    { title: "Course 2 Title", videos: 14, time: "4hr 16min", progress: 2 },
    { title: "Course 3 Title", videos: 21, time: "7hr 22min", progress: 0 },
  ];

  return (
    <Grid container spacing={3}>
      {courses.map((course, index) => (
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
