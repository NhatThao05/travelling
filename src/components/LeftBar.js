import { makeStyles } from '@mui/styles';
import { Container, Typography } from "@mui/material";
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttractionsOutlinedIcon from '@mui/icons-material/AttractionsOutlined';
import BikeScooterOutlinedIcon from '@mui/icons-material/BikeScooterOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(5),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#f8f9fa",
      color: "#555",
      borderRight: "2px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function LeftBar () {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <LocationOnOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Destination</Typography>
      </div>
      <div className={classes.item}>
        <BedroomChildOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Hotel</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutlineOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <AttractionsOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Entertainment</Typography>
      </div>
      <div className={classes.item}>
        <BookmarkOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <BikeScooterOutlinedIcon className={classes.icon} />
        <Typography className={classes.text}>Vehicle</Typography>
      </div>
    </Container>
  );
};

