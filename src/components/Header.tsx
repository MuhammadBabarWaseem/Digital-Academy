import React, { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { IoOptions } from "react-icons/io5";

import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import Logo from "../assets/Logo.png";
import {
  FilterButton,
  ModalContent,
  ProfileMenu,
  StyledAppBar,
  StyledDivider,
  StyledInputBase,
  StyledModal,
  UserProfile,
} from "./Style";
import useScreenSize from "../hooks/useScreenSize";

const Header: React.FC = () => {
  const theme = useTheme();
  const { isXsOnly, isSmUp } = useScreenSize();
  const [profileMenuOpen, setProfileMenuOpen] = useState<null | HTMLElement>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              sx={{
                width: isXsOnly ? 30 : 40,
                height: isXsOnly ? 30 : 40,
                cursor: "pointer",
              }}
            />
            {isSmUp ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  xs: "none",
                  md: "flex",
                }}
              >
                <Typography color="black" sx={{ fontSize: isXsOnly ? 12 : 16 }}>
                  William Pearson
                </Typography>

                <Typography
                  variant="caption"
                  sx={{ fontSize: isXsOnly ? 10 : 12 }}
                  color="textSecondary"
                >
                  william@pearson.com
                </Typography>
              </Box>
            ) : null}
            <FaChevronDown
              color="#373737"
              cursor="pointer"
              size={isXsOnly ? 12 : 16}
            />
          </UserProfile>
        </Box>

        <ProfileMenu
          anchorEl={profileMenuOpen}
          open={Boolean(profileMenuOpen)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem
            sx={{ fontSize: isXsOnly ? 12 : 16 }}
            onClick={handleOpenModal}
          >
            Change Role
          </MenuItem>
          <MenuItem
            sx={{ fontSize: isXsOnly ? 12 : 16 }}
            onClick={handleProfileMenuClose}
          >
            Logout
          </MenuItem>
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
