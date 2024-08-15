import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ChevronLeft } from "@mui/icons-material";
import { Box, Chip, Container, Divider, Grid, Typography } from "@mui/material";

import { ROUTES } from "../constant/Routes";
import useScreenSize from "../hooks/useScreenSize";
import { courseCardData } from "../utils/dummyData";
import CourseCard from "./CourseCard";

const CourseDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isLgUp, isXsOnly } = useScreenSize();
  const navigate = useNavigate();

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Container
        sx={{ bgcolor: "white", padding: isXsOnly ? 1.5 : 5, borderRadius: 2 }}
      >
        <Typography
          variant="h5"
          gutterBottom
          fontWeight="Regular"
          fontSize={isXsOnly ? 18 : 24}
          color="#373737"
        >
          Course | Title
        </Typography>
        <Grid
          onClick={() => navigate(ROUTES.HOME)}
          sx={{ ml: -1, cursor: "pointer" }}
          container
          alignItems={"center"}
        >
          <ChevronLeft />
          <Typography variant="body1" fontSize={isXsOnly ? 14 : 16}>
            Back to Learning Path
          </Typography>
        </Grid>

        <Grid mt={2}>
          <Typography variant="h6" fontSize={isXsOnly ? 18 : 24} gutterBottom>
            Descriptions:
          </Typography>
          <Typography variant="body1" color="#666666">
            {isExpanded
              ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies, eros sapien ultricies purus, vel tincidunt libero purus sit amet libero. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies, eros sapien ultricies purus, vel tincidunt libero purus sit amet libero. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies, eros sapien ultricies purus, vel tincidunt libero purus sit amet libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies, eros sapien ultricies purus, vel tincidunt libero purus sit amet libero. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies, eros sapien ultricies purus, vel tincidunt libero purus sit amet libero. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies, eros sapien ultricies purus, vel tincidunt libero purus sit amet libero."
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, sapien at ultricies ultricies, nunc libero suscipit justo, nec fermentum libero arcu vel nunc. Nullam auctor, metus nec consectetur ultricies..."}
          </Typography>
          <Typography
            onClick={toggleDescription}
            color="#666666"
            fontSize={isXsOnly ? 14 : 16}
            sx={{ mt: 2, cursor: "pointer", textDecoration: "underline" }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Typography>
        </Grid>
      </Container>
      <Container
        sx={{
          bgcolor: "white",
          padding: isXsOnly ? 1.5 : 5,
          borderRadius: 2,
          mt: 2,
        }}
      >
        <Box
          mb={5}
          display="flex"
          flexDirection={isLgUp ? "row" : "column"}
          justifyContent="space-between"
        >
          <Typography
            variant="h5"
            textAlign={isXsOnly ? "center" : "left"}
            gutterBottom
          >
            Videos
          </Typography>
          <Box
            display="flex"
            flexDirection={isXsOnly ? "column" : "row"}
            gap={1}
          >
            <Chip
              sx={{ cursor: "pointer" }}
              label="Show All"
              variant="outlined"
            />
            <Chip
              sx={{ cursor: "pointer" }}
              label="In Progress"
              variant="filled"
            />
            <Chip
              sx={{ cursor: "pointer" }}
              label="Completed"
              variant="outlined"
            />
          </Box>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <div
          style={{
            display: "flex",
            justifyContent: isLgUp ? "flex-start" : "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 5,
            rowGap: 40,
          }}
        >
          {courseCardData.map((course, index) => (
            <CourseCard
              key={index}
              imageUrl={course.imageUrl}
              title={course.title}
              videoCount={course.videoCount}
              duration={course.duration}
              progress={course.progress}
              isLocked={course.isLocked}
              isVideo={true}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default CourseDescription;
