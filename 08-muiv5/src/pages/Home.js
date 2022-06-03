import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import TourCard from "../components/TourCard";
import cities from "../data.json";

const Home = () => {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tour
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default Home;
