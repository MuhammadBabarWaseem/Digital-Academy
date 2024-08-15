import {
  AppBar,
  Box,
  Button,
  Divider,
  InputBase,
  Menu,
  Modal,
  styled,
} from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
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

export const StyledDivider = styled(Divider)(({ theme }) => ({
  height: "40px",
  opacity: 0.4,
  margin: theme.spacing(0, 2),
  backgroundColor: "#C7C7C7",
  alignSelf: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const FilterButton = styled(Button)(({ theme }) => ({
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

export const UserProfile = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const ProfileMenu = styled(Menu)(({ theme }) => ({
  mt: theme.spacing(5),
}));

export const StyledModal = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderColor: "white",
}));

export const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  maxWidth: 400,
  width: "100%",
  borderColor: "none",
  "&:focus": {
    outline: "none",
  },
}));

export const ProfileFilterButton = styled(Button)(({ theme }) => ({
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
