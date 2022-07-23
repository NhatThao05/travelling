import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from "./components/Navbar";
import LeftBar from "./components/LeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <NavBar />  
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
      </Grid>
    </>   
  );
}
export default App;
