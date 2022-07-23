import { Grid } from "@mui/material";
import LeftBar from "./components/LeftBar";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Grid container>
        <LeftBar />
      </Grid>
    </>
    
  );
}

export default App;
