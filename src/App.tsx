import React from 'react';
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
  return (
    <div id="wrapper">
      <NavBar id="header"/>
      <BodyWrapper id="body-wrapper" />
    </div>
  );
}

export default App;
