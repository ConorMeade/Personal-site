import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import Projects from './pages/Projects';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Box } from '@material-ui/core';
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
})


function App() {
  useEffect(() => {
    document.title = "Conor Meade - Junior Developer"
  }, [])
  const classes = useStyles()
  return (
    <>
    <div className={classes.root}>
      <Container className={classes.root}>
        <Box my = {2}>
          <NavBar />
        </Box>
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
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
