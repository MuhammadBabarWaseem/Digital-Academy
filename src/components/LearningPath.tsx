import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Box, Button, Card, CardContent, Divider, Typography } from '@mui/material';

import useScreenSize from '../hooks/useScreenSize';
import { CardData } from '../types/interface';
import { businessCardData, courseCardData, fundamentalCardData } from '../utils/dummyData';
import CourseCard from './CourseCard';

const LearningPaths: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const { isXlUp, isLgUp, isXsToMd } = useScreenSize();

  const handleCardClick = (text: string) => {
    setSelectedCourse(text);
  };

  const renderCards = (data: CardData[], bgColor: string) =>
    data.map((card: CardData) => (
      <Card
        key={card.id}
        sx={{
          minWidth: 135,
          minHeight: 143,
          marginRight: 2,
          bgcolor: bgColor,
          borderRadius: 3,
          boxShadow: "none",
          mt: 1,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={() => handleCardClick(card.text)}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {typeof card.imageSrc === "string" ? (
            <img
              src={card.imageSrc}
              alt={`Badge${card.id}`}
              width={50}
              height={50}
            />
          ) : (
            card.imageSrc
          )}
          <Typography fontSize={16} mt={1} variant="body2" align="center">
            {card.text}
          </Typography>
        </CardContent>
      </Card>
    ));

  return (
    <Box my={4} p={3} bgcolor="white" justifyContent="center">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" gutterBottom>
          Your Learning Paths
        </Typography>
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50%",
              minWidth: "40px",
              minHeight: "40px",
              padding: 0,
            }}
          >
            <FaChevronLeft />
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50%",
              minWidth: "40px",
              minHeight: "40px",
              padding: 0,
            }}
          >
            <FaChevronRight />
          </Button>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexDirection={isXlUp ? "row" : "column"}
        gap={isXlUp ? 4 : 0}
      >
        <Box>
          <Typography variant="h6" gutterBottom>
            Fundamentals
          </Typography>
          <Box
            sx={{
              height: "4px",
              backgroundColor: "#3198ED",
              marginTop: 1,
              borderRadius: "4px",
              marginRight: 2,
              width: "100%",
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="nowrap"
            mt={1}
          >
            {renderCards(fundamentalCardData, "#F2F5FB")}
          </Box>
        </Box>

        <Box sx={{ mt: isXsToMd ? 2 : 0 }}>
          <Typography variant="h6" gutterBottom>
            Business Function
          </Typography>
          <Box
            sx={{
              height: "4px",
              backgroundColor: "#FBA837",
              marginTop: 1,
              borderRadius: "4px",
              width: "100%",
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="nowrap"
            mt={1}
          >
            {renderCards(businessCardData, "#FFFAF2")}
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Typography textAlign="center" my={4} variant="h6" gutterBottom>
        {selectedCourse ? `${selectedCourse} Courses` : "Select a Course"}
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: isLgUp ? 30 : 10,
          rowGap: isLgUp ? 40 : 10,
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
          />
        ))}
      </div>
    </Box>
  );
};

export default LearningPaths;
