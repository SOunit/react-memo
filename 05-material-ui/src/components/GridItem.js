import { Grid, Paper } from "@material-ui/core";
import React from "react";

const GridItem = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        style={{
          height: "75px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Grid Item
      </Paper>
    </Grid>
  );
};

export default GridItem;
