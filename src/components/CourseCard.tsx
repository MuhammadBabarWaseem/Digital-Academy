import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Button,
  Modal,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ClockIcon from "@mui/icons-material/AccessTime";
import CircularProgress from "./ProgressBar";
import LockedIcon from "../assets/Locked.png";
import { useNavigate } from "react-router-dom";
import { LuPlayCircle } from "react-icons/lu";
import { dummyCourseData } from "../utils/dummyData";
import { IoCloseCircleOutline } from "react-icons/io5";
import useScreenSize from "../hooks/useScreenSize";

interface CourseCardProps {
  imageUrl: string;
  title: string;
  videoCount: number;
  duration: string;
  progress: number;
  isLocked: boolean;
  isVideo?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageUrl,
  title,
  videoCount,
  duration,
  progress,
  isLocked,
  isVideo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isLessMediumScreen } = useScreenSize();

  const handleClose = () => setIsOpen(false);

  const handleCardClick = () => {
    if (isVideo) {
      setIsOpen(true);
    } else {
      navigate("/details");
    }
  };

  return (
    <>
      <Card sx={{ position: "relative", width: 283 }}>
        <CardMedia component="img" height="190" image={imageUrl} alt={title} />
        {isVideo && (
          <Box
            sx={{
              position: "absolute",
              top: 6,
              right: 10,
              bgcolor: "#CB2C30",
              color: "#fff",
              px: 1,
              py: 0.5,
              borderRadius: 10,
              fontSize: 15,
              fontFamily: "sans-serif",
              textAlign: "center",
            }}
          >
            Watch Video
          </Box>
        )}
        <CardContent>
          <Typography mb={2} variant="h6" component="div">
            {title}
          </Typography>
          {!isVideo && (
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <IconButton size="small" color="primary">
                <VideoLibraryIcon />
              </IconButton>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {videoCount} videos
              </Typography>
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center", mt: -1 }}>
            <IconButton size="small" color="primary">
              <ClockIcon />
            </IconButton>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ ml: 1, textWrap: "nowrap" }}
            >
              {duration}
            </Typography>
            <Box sx={{ flexGrow: 1, ml: 10 }}>
              {isLocked ? (
                <img
                  width={isLessMediumScreen ? 30 : 40}
                  height={isLessMediumScreen ? 30 : 40}
                  src={LockedIcon}
                  alt="locked icon"
                />
              ) : (
                <CircularProgress
                  value={progress}
                  size={isLessMediumScreen ? 40 : 50}
                />
              )}
            </Box>
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Button
              disabled={isLocked}
              onClick={handleCardClick}
              sx={{
                backgroundColor: "#3198ED",
                borderRadius: "50px",
                color: "#FFFFFF",
                width: "100%",
                "&:hover": {
                  backgroundColor: "#2a7bce",
                },
              }}
            >
              {isVideo ? "Watch Video" : "Course Detail"}
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Modal
        component={Box}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
            mx: 4,
            maxWidth: 500,
            width: "100%",
            position: "relative",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#373737",
            }}
          >
            <IoCloseCircleOutline />
          </IconButton>

          <Typography
            id="modal-modal-title"
            variant="caption"
            sx={{ color: "#373737", fontSize: 13, ml: 1 }}
          >
            Course Preview
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ fontWeight: "bold", ml: 1, fontSize: 18 }}
          >
            Lorem ipsum dolor sit amet tetur. Pretium viverra.
          </Typography>
          <video
            width="100%"
            controls
            autoPlay
            muted
            style={{ borderRadius: 8, marginTop: 10, marginBottom: 10 }}
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Typography
            id="modal-modal-description"
            sx={{ fontWeight: "bold", ml: 1, fontSize: 20 }}
          >
            Modules
          </Typography>

          <div>
            {dummyCourseData.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                }}
              >
                <img
                  src={item.imgSrc}
                  height={60}
                  style={{ borderRadius: 8 }}
                  alt="Course img"
                />
                <LuPlayCircle size={29} color="#267842" />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography
                    id={`modal-modal-title-${item.id}`}
                    variant="caption"
                    sx={{ color: "#373737", fontSize: 16 }}
                  >
                    {item.text}
                  </Typography>
                </Box>
                <Typography
                  id={`modal-modal-description-${item.id}`}
                  sx={{ fontWeight: "bold", fontSize: 18 }}
                >
                  {item.time}
                </Typography>
              </Box>
            ))}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CourseCard;
