import { useState } from "react";
import {
  ButtonGroup,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createTheme,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { green, orange } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "./logo.svg";
import "./App.css";
import "fontsource-roboto";
import GridContainer from "./components/GridContainer";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: "15px",
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createTheme({
  typography: { h2: { fontSize: "3rem", marginBottom: "1rem" } },
  palette: { primary: { main: green[500] }, secondary: { main: orange[500] } },
});

function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(false);

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GridContainer />
      {/* <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <MenuIcon />
                <Typography variant="h6">MUI Theming</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: "75px", width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: "75px", width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: "75px", width: "100%" }} />
              </Grid>
            </Grid>

            <TextField />
            <TextField variant="filled" />
            <TextField variant="outlined" color="secondary" />
            <TextField variant="outlined" color="secondary" type="date" />
            <TextField variant="outlined" color="secondary" type="time" />
            <TextField
              variant="filled"
              color="secondary"
              type="email"
              label="Email"
              placeholder="test@test.com"
            />
            <CheckboxExample />
            <ButtonGroup>
              <Button href="#" variant="contained" color="secondary">
                Link
              </Button>
              <Button
                onClick={() => alert("hello")}
                variant="contained"
                color="secondary"
              >
                Alert
              </Button>
              <Button size="small" variant="contained" color="secondary">
                Small
              </Button>
              <Button size="large" variant="contained" color="secondary">
                Large
              </Button>
              <Button
                style={{ fontSize: "1.5rem" }}
                variant="contained"
                color="secondary"
              >
                Custom Style
              </Button>
              <Button variant="contained" color="secondary">
                Custom Style
              </Button>
              <Button
                startIcon={<SaveIcon />}
                endIcon={<SaveIcon />}
                size="large"
                variant="contained"
                color="primary"
              >
                Icon
              </Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="primary">
              <Button startIcon={<SaveIcon />}>Save</Button>
              <Button startIcon={<DeleteIcon />}>Delete</Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container> */}
    </ThemeProvider>
  );
}

export default App;
