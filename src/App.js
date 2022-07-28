import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NavBar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Center from "./components/Center";
import Rightbar from './components/RightBar';
import Footer from './components/Footer';

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
        <Grid item sm={7} xs={10}>
          <Center />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      {/* <Chat /> */}
      <Footer />
    </>   
  );
}
export default App;
