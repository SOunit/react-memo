import React from "react";
import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src="https://picsum.photos/600/320" alt="" height={325} />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Ex nisi quis minim eu do in culpa in anim et. Eiusmod reprehenderit
          duis excepteur minim officia elit. Et nulla reprehenderit nisi duis
          voluptate ipsum anim mollit cupidatat aliqua exercitation mollit. Ex
          ad dolore ullamco aliqua exercitation ut occaecat Lorem. Duis in
          eiusmod elit consectetur qui quis adipisicing ullamco adipisicing
          laboris quis elit mollit. Nisi do anim sunt anim quis culpa esse
          deserunt.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Question
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
