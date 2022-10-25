import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './Components/Footer'
import NavBar from './Components/NavBar';
import Projects from './pages/Projects';
import { Route, Switch } from 'react-router-dom';
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
  },
  footer : {
    padding: "2%",
    marginTop: 'auto',
    marginLeft: 'auto',
  }
})


function App() {
  useEffect(() => {
    document.title = "Conor Meade - Software Developer"
  }, [])
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.root}>
        <Box my = {2}>
          <NavBar />
        </Box>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Projects" component={Projects} />
        </Switch>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </Container>
    </div>
  );
}

export default App;
