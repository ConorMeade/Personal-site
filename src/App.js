import './App.css';
import { data } from './data/data'
import { Route } from 'react-router-dom'
import { Button } from '@material-ui/core';

function App() {
  const name = data.name
  const job = data.occupation
  const description = data.description
  return (
    <>
    <div>Personal site for {name}. I am a {job} who is currently {description}.</div>
    <div>
      <Button color="primary">Click me!</Button>
    </div>
  </>
  );
}

export default App;
