import {Box, Grid, ListItemText, Typography, List} from "@mui/material"
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from '@mui/styles';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const useStyles = makeStyles((theme) => ({
 icon: {
  marginRight: theme.spacing(2),
 },
 title: {
  fontWeight: 'bolder'
 }
}))
export default function Footer() {
 const classes = useStyles();
 return (
  <Box style={{background: '#1976D2', color: "#E5E5E5", zIndex: 1, position: "relative"}}>
   <Grid container spacing={2} justifyContent="center">
    <Grid item md={6} lg={2} sx={{marginTop: 4}}>
     <Typography variant="h5" className={classes.title}>Nha Trang Travelling</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="body1"><CallIcon className={classes.icon}/>1900 900 399</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1"><ForwardToInboxOutlinedIcon className={classes.icon}/>nhattrangTour@gmail.com</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1"><MilitaryTechOutlinedIcon /> <WorkspacePremiumOutlinedIcon className={classes.icon}/>National brand</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>
    {/*  */}
    <Grid item md={6} lg={2} sx={{marginTop: 4}}>
     <Typography variant="h5" className={classes.title}>Services</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Tour in city</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Tour to island</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Entertainment</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Hotel</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Fishing Seafood</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Visiting Oceanography</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>
    {/*  */}
    <Grid item md={6} lg={2} sx={{marginTop: 4}}>
     <Typography variant="h5" className={classes.title}>Customer Services</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Customer card</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Application</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Travelling voucher</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Insurance</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Customer's opinion</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Contribute advice</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Program</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>
    {/*  */}
    <Grid item md={6} lg={2} sx={{marginTop: 4}}>
     <Typography variant="h5" className={classes.title}>Policies</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Protection Regulations</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">General Terms</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Buying tours online</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Payment Terms</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Delivery policy</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Penalty cancellation policy</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Privacy Policy</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Quality Policy</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Recruit</Typography>
       </ListItemText>
      </List>
     </Box>
    </Grid>
    {/*  */}
    <Grid item md={6} lg={2} sx={{marginTop: 4}}>
     <Typography variant="h5" className={classes.title}>News</Typography>
     <Box sx={{mt: 2}}>
      <List>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Point route</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Travel News Saigontourist</Typography>
       </ListItemText>
       <ListItemText>
        <Typography lineHeight={2} variant="body1">Travel news</Typography>
       </ListItemText>   
      </List>
     </Box>
    </Grid>
   </Grid>
  </Box>
 )
}