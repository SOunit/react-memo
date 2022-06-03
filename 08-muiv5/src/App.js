import "./App.css";
import TourCard from "./components/TourCard";
import { Container, Grid } from "@mui/material";
import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
