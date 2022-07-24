import { Container } from "@mui/material" 
import { makeStyles } from '@mui/styles';
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}));

export default function Feed () {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post title="Welcome to Nha Trang" img="https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/nha-trang-tour-guide-cover.jpg"/>
      <Post title="Enjoy cuisin here" img="http://reviewvilla.vn/wp-content/uploads/2022/04/Nem-nuong-Nha-Trang-12.jpg"/>
      <Post title="Dam market" img="https://scootersaigontour.com/wp-content/uploads/2020/11/Dam-Market-In-Nha-Trang-from-above.jpg"/>
      <Post title="Enjoy sightseeing with a cup of cocktail" img="https://tadiha.com/pictures/picfullsizes/2020/04/20/zeb1587362586.jpg"/>
      <Post title="Nha Trang Entertainment" img="https://vi.guide/wp-content/uploads/2021/12/Khanh-Hoa-tourism-aims-to-recover-on-a-large-scale.jpg"/>
      <Post title="Go around by traditional vehicles" img="https://st2.depositphotos.com/3316565/6659/i/950/depositphotos_66596941-stock-photo-fishing-boats-in-marina-at.jpg"/>
    </Container>
  );
};