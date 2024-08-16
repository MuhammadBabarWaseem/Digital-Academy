import React from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

import { CircularProgressProps } from '../types/interface';

const CircularProgressComponent: React.FC<CircularProgressProps> = ({
  value,
  size = 80,
}) => {
  const progressValue = Math.max(0, Math.min(value, 100));
  const calculatedFontSize = size * 0.25;

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        color="inherit"
        size={size}
        thickness={3}
        value={100}
        sx={{
          color: (theme) => theme.palette.grey[300],
        }}
      />
      <CircularProgress
        variant="determinate"
        color="success"
        size={size}
        thickness={3}
        value={progressValue}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          color: (theme) => theme.palette.success.main,
        }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: calculatedFontSize,
          fontWeight:'800',
          color: (theme) => theme.palette.text.primary,
        }}
      >
        {progressValue}%
      </Typography>
    </Box>
  );
};

export default CircularProgressComponent;
