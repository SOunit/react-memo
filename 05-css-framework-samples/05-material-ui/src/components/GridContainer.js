import { Grid } from "@material-ui/core";
import React from "react";
import GridItem from "./GridItem";

const GridContainer = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <GridItem />
      <GridItem />
      <GridItem />
    </Grid>
  );
};

export default GridContainer;
