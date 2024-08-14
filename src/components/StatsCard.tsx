import { Box, Card, Typography, Avatar } from "@mui/material";

const StatsCard = ({
  imageUrl,
  textLine1,
  number,
}: {
  imageUrl: string;
  textLine1: string;
  number: number;
}) => {
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
          sx={{ width: 48, height: 48, marginRight: 2 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontSize={19} variant="body1">
            {textLine1}
          </Typography>
        </Box>
      </Box>
      <Typography
        fontSize={40}
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
