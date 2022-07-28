import { Avatar, Container, ImageList, ImageListItem, Typography, Divider, Link, AvatarGroup, Box} from "@mui/material"
import { makeStyles } from '@mui/styles';
import Chat from './Chat';


const preventDefault = (event) => event.preventDefault();

const useStyles = makeStyles((theme) => ({
 container: {
   paddingTop: theme.spacing(5),
   position: "sticky",
   top: 0,
 },
 title: {
   color: "#555",
 },
 link: {
   color: "red",
 },
}));

export default function Rightbar () {
 const classes = useStyles();
 return (
   <Container className={classes.container}>
     <Typography className={classes.title} gutterBottom variant="h6">Support Partners</Typography>
      <AvatarGroup direction="row" max={4} style={{ marginBottom: 20 }} spacing={1}>
        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />   
        <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Mbappe" src="https://material-ui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Trent" src="https://material-ui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Valencia" src="https://material-ui.com/static/images/avatar/7.jpg" />
        <Avatar alt="Ronaldo" src="https://material-ui.com/static/images/avatar/8.jpg" />
        <Avatar alt="Zidane" src="https://material-ui.com/static/images/avatar/9.jpg" />
        <Avatar alt="Beckham" src="https://material-ui.com/static/images/avatar/10.jpg" />
      </AvatarGroup>
     <Typography className={classes.title} gutterBottom variant="h6">Gallery</Typography>
     <ImageList rowHeight={150} style={{ marginBottom: 20 }} cols={2}>
       <ImageListItem>
         <img src="https://www.therooftopguide.com/rooftop-bars-in-bangkok/Bilder/mahanakhon-bangkok-skybar-600-1.jpg" alt="Sky bars" />
       </ImageListItem>
       <ImageListItem>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhbgZLmUvJoJ-s30RJv2FhUx6nl-ITIphKw&usqp=CAU" alt="Seafood" />
       </ImageListItem>
       <ImageListItem>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqrU8n7SnIELKLtZI-H-P5uVL8mWGC8QCrw&usqp=CAU" alt="Coffee in font of sunshine" />
       </ImageListItem>
       <ImageListItem>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrQwQhErLbBdcqnFtYPr9L-USp5xmfDQYuA&usqp=CAU" alt="Destination souvenir" />
       </ImageListItem>
       <ImageListItem>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZIClB8XPF6qd90xBAdzPRoyJ92AdbFkpmQ&usqp=CAU" alt="Main activity" />
       </ImageListItem>
       <ImageListItem>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ax5rB6mStsbWyGqfGGfHlNOWF4J9B-Ie2g&usqp=CAU" alt="Local business" />
       </ImageListItem>
     </ImageList>
     <Typography className={classes.title} gutterBottom variant="h6">Categories activity</Typography>
     <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', typography: 'body1', '& > :not(style) + :not(style)': {ml: 2},}} onClick={preventDefault}>
      <Link href="#" underline="hover">
        {'Sports'}
      </Link>
      <Link href="#" underline="hover">
        {'Food'}
      </Link>
      <Link href="#" underline="hover">
        {'Music'}
      </Link>
     </Box>
     <Divider flexItem style={{marginBottom: 5}}/>
     <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', typography: 'body1', '& > :not(style) + :not(style)': {ml: 2},}} onClick={preventDefault}>
      <Link href="#" underline="hover">
        {'Movies'}
      </Link>
      <Link href="#" underline="hover">
        {'Science'}
      </Link>
      <Link href="#" underline="hover">
        {'Life'}
      </Link>
     </Box>
     <Divider flexItem style={{marginBottom: 5}}/>
     <Chat />

   </Container>
 );
};
