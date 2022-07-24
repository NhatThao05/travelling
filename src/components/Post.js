import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
 card: {
   marginBottom: theme.spacing(5),
 },
 media: {
   height: 250,
   [theme.breakpoints.down("sm")]: {
     height: 150,
   },
 },
}));

export default function Post ({ img, title }) {
 const classes = useStyles();
 return (
   <Card className={classes.card}>
     <CardActionArea>
       <CardMedia className={classes.media} image={img} title="My Post" />
       <CardContent>
         <Typography gutterBottom variant="h5">{title}</Typography>
         <Typography variant="body2">
          Lorem ipsum dolor sit amet, augue nemore integre quo id, in elit mucius deseruisse sit. 
          Usu nihil prodesset voluptaria no, movet euripidis eu pro, ne pri atomorum adipiscing. 
          Eum dolore voluptatum ut. Duo brute assueverit ex, affert quodsi noluisse id vim. An latine prompta definitiones eos. 
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button size="small" variant="contained">Share</Button>
       <Button size="small" variant="contained">Learn More</Button>
     </CardActions>
   </Card>
 );
};
