import React from 'react';
import './App.css';
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import { data } from './data/data';
import { Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: "gray",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: "100%",
  },
  image: {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '28px'
  }
  // ,
  // nav: {

  // }
})


function App() {
  const classes = useStyles()
  const name = data.name
  const job = data.occupation
  const description = data.description
  return (
    <>
    <div className={classes.root}>
      <Container className={classes.root}>
        <Box my = {2}>
          <NavBar />
        </Box>
        <Route path="/" component={Home} />
      </Container>
      {/* <Typography>
          <img className={classes.image} src={`./public/toucan.jpg`} alt="loading..."/>
          <div>Personal site for {name}. I am a {job} who is currently {description}.</div>
          <div>
            <Button color="primary">Click me!</Button>
          </div>
        </Typography> */}
    </div>
  </>
  );
}

export default App;
