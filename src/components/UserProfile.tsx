import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  styled,
  useTheme,
  Button,
  Divider,
  Card,
  Modal,
  TextField,
  CardContent,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import CirclularProgress from "./ProgressBar";
import { Badges } from "../utils/Badges";
import RenderBadges from "./Badges";

const FilterButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  border: "1px solid #373737",
  borderRadius: theme.shape.borderRadius * 5,
  textTransform: "none",
  display: "flex",
  color: "#373737",
  gap: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#FFFFFF",
    borderColor: "#373737",
  },
}));

interface UserProfileProps {
  isDetails?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ isDetails }) => {
  const theme = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    console.log("Role:", role);
    console.log("Description:", description);
    handleModalClose();
  };

  return (
    <Box sx={{ p: 2, textAlign: "center", bgcolor: "white" }}>
      {!isDetails && (
        <>
          <Avatar
            alt="William Pearson"
            src="https://shorturl.at/qkuCw"
            sx={{ width: 100, height: 100, mx: "auto" }}
          />
          <Typography variant="h6">William Pearson</Typography>
          <Typography variant="body2" color="textSecondary">
            Manufacturing
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <FilterButton variant="outlined" onClick={handleModalOpen}>
              <span style={{ marginRight: theme.spacing(2) }}>
                Request Role Update
              </span>
              <FaChevronDown color="#373737" width={8} height={12} />
            </FilterButton>
          </Box>
          <Divider sx={{ my: 3 }} />
        </>
      )}

      <CirclularProgress value={50} size={isDetails ? 100 : 80} />
      <Typography mt={2} fontWeight="bold">
        {isDetails ? "Course Progress" : "Learning Path Progress"}
      </Typography>
      <Box my={3} justifyContent="center" alignItems="center">
        <RenderBadges imageUrls={Badges} />
        <Typography fontWeight="bold">Badges</Typography>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Box textAlign="left">
        {isDetails ? (
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              border: "none",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                width: 92,
                height: 92,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src="https://shorturl.at/qkuCw"
                alt="User's Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <CardContent>
              <Typography
                fontSize={16}
                fontWeight="700"
                variant="h6"
                component="div"
              >
                William Pearson
              </Typography>
              <Typography fontSize={13} variant="body2" color="#333333">
                Phone: +44 1324 5678
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    borderColor: "black",
                    borderRadius: "100px",
                    boxShadow: "none",
                    borderWidth: 1,
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                      borderColor: "black",
                      boxShadow: "none",
                    },
                  }}
                  onClick={() => {}}
                >
                  Email me
                </Button>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <>
            <Typography my={2} variant="body2" color="textSecondary">
              View my Learning Path
            </Typography>
            <Typography my={2} variant="body2" color="textSecondary">
              View Transcript
            </Typography>
          </>
        )}
      </Box>

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" mb={2}>
            Request Role Change
          </Typography>
          <TextField
            fullWidth
            label="Current Role"
            variant="outlined"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Additional Comment"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserProfile;
