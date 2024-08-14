import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  styled,
  InputBase,
  InputAdornment,
  Divider,
  Button,
  useTheme,
  Box,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Modal,
  TextField,
} from "@mui/material";
import { FaBars, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import { IoOptions } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1),
  width: 250,
  height: 40,
  borderRadius: 80,
  paddingLeft: `calc(0.1em + ${theme.spacing(2)})`,
  border: "1px solid #C7C7C7",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    fontSize: "0.75rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "400px",
  },
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  height: "40px",
  opacity: 0.4,
  margin: theme.spacing(0, 2),
  backgroundColor: "#C7C7C7",
  alignSelf: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const FilterButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1, 2),
  backgroundColor: "#FFFFFF",
  border: "1px solid #373737",
  borderRadius: theme.shape.borderRadius * 5,
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  color: "#373737",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  "&:hover": {
    backgroundColor: "#FFFFFF",
    borderColor: "#373737",
  },
}));

const UserProfile = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const ProfileMenu = styled(Menu)(({ theme }) => ({
  mt: theme.spacing(5),
}));

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderColor: "white",
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  maxWidth: 400,
  width: "100%",
}));

const Header: React.FC = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState<null | HTMLElement>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuOpen(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuOpen(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    handleProfileMenuClose();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </IconButton>
          <img
            src={Logo}
            width={150}
            height={27}
            alt="Brand Logo"
            style={{ display: "block" }}
          />
          <StyledDivider orientation="vertical" flexItem />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <StyledInputBase
              placeholder="Search..."
              startAdornment={
                <InputAdornment position="start">
                  <FaSearch color="#C7C7C7" />
                </InputAdornment>
              }
            />

            <FilterButton variant="outlined">
              <IoOptions color="#373737" width={22} height={18} />
              <span style={{ marginRight: theme.spacing(2) }}>Filter</span>
              <FaChevronDown color="#373737" width={8} height={12} />
            </FilterButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            color="inherit"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <BsFillGrid3X3GapFill color="#9E9E9E" />
          </IconButton>
          <IconButton
            color="inherit"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <IoMdHelpCircle color="#9E9E9E" />
          </IconButton>

          <UserProfile onClick={handleProfileMenuOpen}>
            <Avatar
              alt="User Name"
              src="https://shorturl.at/qkuCw"
              sx={{ width: 40, height: 40, cursor: "pointer" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                xs: "none",
                md: "flex",
              }}
            >
              <Typography color="black" sx={{ fontSize: 16 }}>
                William Pearson
              </Typography>

              <Typography
                variant="caption"
                sx={{ fontSize: 12 }}
                color="textSecondary"
              >
                william@pearson.com
              </Typography>
            </Box>
            <FaChevronDown
              color="#373737"
              cursor="pointer"
              width={12}
              height={12}
            />
          </UserProfile>
        </Box>

        <ProfileMenu
          anchorEl={profileMenuOpen}
          open={Boolean(profileMenuOpen)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleOpenModal}>Change Role</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </ProfileMenu>

        <StyledModal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="change-role-modal"
          aria-describedby="modal-to-change-role"
        >
          <ModalContent>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              Change Role
            </Typography>
            <TextField
              fullWidth
              label="Current Role"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Additional Comment"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleCloseModal}
              fullWidth
            >
              Submit
            </Button>
          </ModalContent>
        </StyledModal>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
