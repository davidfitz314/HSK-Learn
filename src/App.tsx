import React,  { useState } from 'react';
import { NavBar } from './components/NavBar';
// import { makeStyles } from '@material-ui/core';
import { BodyWrapper } from './components/BodyWrapper';

/* color scheme 
  primary: #27EE02
  secondary: #00C700
  TextDescription: theme.palette.text.secondary
  TextHeader: theme.palette.text.primary
*/
// const useStyles = makeStyles({
  
// })

function App() {
  // const classes = useStyles();
  const [level, setLevel] = useState(1);
  return (
    <div id="wrapper">
      <NavBar id="header" setPage={setLevel} />
      <BodyWrapper id="body-wrapper" currentLevel={level}/>
    </div>
  );
}

export default App;
