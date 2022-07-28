import { Container, Fab, Modal, Tooltip, TextField, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { useState } from "react";
import * as React from 'react';


const useStyles = makeStyles((theme) => ({
 fab: {
  position: "fixed",
  top: '50px'
 },
 container: {
  marginTop: 100,
  height: 600,
  backgroundColor: "#E3F2FD",
 },
 form: {
  padding: theme.spacing(2),
 },
 item: {
  marginBottom: theme.spacing(3)
 }
}))



export default function Chat() {
 const classes = useStyles();
 const [open, setOpen] = useState(false)
 
 return (
  <>
   <Tooltip title="Chat with US" aria-label="chat" onClick={() => setOpen(true)}>
    <Fab color="primary" className={classes.fab}>
     <CommentOutlinedIcon />
    </Fab>
   </Tooltip>
   <Modal open={open}>
    <Container className={classes.container}>
     <form className={classes.form} autoComplete="off">
      <div className={classes.item}>
      <TextField id="standard-basic" label="Title" variant="standard" size="small" style={{width: '100%'}}/>
      </div>
      <div className={classes.item}>
      <TextField id="outlined-multiline-static" label="Description" multiline rows={4} defaultValue="Tell US about your experience" size="small" style={{width: '100%'}}/>
      </div>
      <div className={classes.item}>
       <TextField select label="Visibility" style={{width: '100%'}} value="Public">
        <MenuItem value="Public">Public</MenuItem>
        <MenuItem value="Private">Private</MenuItem>
        <MenuItem value="Unlisted">Unlisted</MenuItem>
       </TextField>
      </div>
      <div className={classes.item}>
      <FormLabel id="demo-radio-buttons-group-label">Which gender are you?</FormLabel>
      <RadioGroup>
       <FormControlLabel value="female" control={<Radio />} label="Female" />
       <FormControlLabel value="male" control={<Radio />} label="Male" />
       <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      </div>
      <div className={classes.item}>
       <Button variant="outlined" color="primary" style={{marginRight: 10}}>Upload</Button>
       <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Save</Button>
      </div>
     </form>
    </Container>
   </Modal>
   
  </>
 )
}