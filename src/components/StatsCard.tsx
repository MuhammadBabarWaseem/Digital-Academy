import { Avatar, Box, Card, Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

const StatsCard = ({
  imageUrl,
  textLine1,
  number,
}: {
  imageUrl: string;
  textLine1: string;
  number: number;
}) => {
  const { isXsOnly } = useScreenSize();
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={imageUrl}
          alt="Stat Icon"
          sx={{
            width: isXsOnly ? 30 : 48,
            height: isXsOnly ? 30 : 48,
            marginRight: 2,
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontSize={isXsOnly ? 14 : 19} variant="body1">
            {textLine1}
          </Typography>
        </Box>
      </Box>
      <Typography
        fontSize={isXsOnly ? 20 : 40}
        fontWeight={300}
        variant="body1"
        sx={{ marginLeft: 2 }}
      >
        {number}
      </Typography>
    </Card>
  );
};

export default StatsCard;
