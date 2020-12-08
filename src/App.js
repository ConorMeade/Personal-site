import './App.css';
import NavBar from './Components/NavBar'
import { data } from './data/data'
// import { Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: "100%"
  },
  image: {
    paddingTop: '81.25%',
    borderRadius: '50%',
    margin: '28px'
  }
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
        <Box my={5}>
          <NavBar />
        </Box>
        <img className={classes.image} src={`./public/toucan.jpg`} alt="loading..."/>
        <div>Personal site for {name}. I am a {job} who is currently {description}.</div>
        <div>
          <Button color="primary">Click me!</Button>
        </div>
      </Container>

    </div>
  </>
  );
}

export default App;
