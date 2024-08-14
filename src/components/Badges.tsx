import { Grid, Box } from "@mui/material";

const RenderBadges = ({ imageUrls }: { imageUrls: string[] }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "100%",
        }}
      >
        {imageUrls.map((url, index) => (
          <Grid
            item
            xs={2.4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <img
              src={url}
              alt={`Badge ${index}`}
              sizes="60px"
              style={{ borderRadius: "4px", maxWidth: "100%", height: "auto" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RenderBadges;
