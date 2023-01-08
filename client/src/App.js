import logo from './logo.svg';
import './App.css';
import {AppBar, Container, Grid, Grow, Typography} from '@mui/material';
import Posts from './Component/Posts';
import Form from './Component/Form';

function App() {
  return (
    <div className="App">
     <Container maxWidth='lg'>
        <AppBar style={{width:'250px',height:'150px', margin:'auto',}} position='static' color='inherit'>
        <img src='./images/memories.jpg' width= '100% 'height='100%'/>
        </AppBar>
        <Grow in>
         <Container>
         <Grid container justify='space-between' alignItems='srtetch' spacing='3'>
          <Grid item xs={12} sm={7}>
            <Posts/>
          </Grid>
          <Grid item xs={12} sm={4}>
          <Form/>
          </Grid>
         </Grid>
         </Container>
        </Grow>
     </Container> 
    </div>
  );
}

export default App;
