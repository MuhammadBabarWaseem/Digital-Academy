import { Avatar, Box } from '@mui/material';

import ProfileBg from '../assets/Profile_Bg.png';

const Profile = () => {
  return (
    <Box
      my={4}
      p={10}
      bgcolor="white"
      borderRadius={2}
      position="relative"
      justifyContent="center"
    >
      <Box position="relative">
        <img
          style={{ objectFit: "cover", width: "100%", minWidth:100 }}
          src={ProfileBg}
          alt="Background"
        />

        <Avatar
          src="https://shorturl.at/qkuCw"
          sx={{
            width: { xs: 70, sm: 80, md: 100, lg: 135 },
            height: { xs: 70, sm: 80, md: 100, lg: 135 },
            position: "absolute",
            top: { xs: "50%", sm: "60%", md: "70%" },
            left: { xs: "50%", sm: "5%", md: "5%" },
            transform: {
              xs: "translate(-50%, 0)",
              sm: "translate(0, 0)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Profile;
