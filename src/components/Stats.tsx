import { Grid } from "@mui/material";

import { Badges } from "../constant/Badges";
import StatsCard from "./StatsCard";
import useScreenSize from "../hooks/useScreenSize";

const Stats = () => {
  const { isXsOnly } = useScreenSize();
  return (
    <>
      <Grid
        container
        spacing={isXsOnly ? 1 : 4}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          },
        }}
      >
        <Grid item>
          <StatsCard
            imageUrl={Badges[0]}
            textLine1="Total Days in training"
            number={24}
          />
        </Grid>
        <Grid item>
          <StatsCard
            imageUrl={Badges[1]}
            textLine1="Courses Completed"
            number={17}
          />
        </Grid>
        <Grid item>
          <StatsCard
            imageUrl={Badges[2]}
            textLine1="Achievements Badges"
            number={1}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Stats;
