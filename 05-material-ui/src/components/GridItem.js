import { Grid, Paper, styled } from "@material-ui/core";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
  padding: "1rem 2rem",
}));

const GridItem = () => {
  return (
    <Grid item>
      <Item>Grid Item</Item>
    </Grid>
  );
};

export default GridItem;
