import { Container, Typography } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function LeftBar() {
 return (
  <Container>
   <div>
    <HomeOutlinedIcon />
    <Typography>Homepage</Typography>
   </div>
  </Container>
 )
}