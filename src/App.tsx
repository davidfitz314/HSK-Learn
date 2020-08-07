import React,  { useState } from 'react';
import { NavBar } from './components/NavBar';
import { BodyWrapper } from './components/BodyWrapper';

function App() {
  const [level, setLevel] = useState(1);
  return (
    <div id="wrapper">
      <NavBar id="header" setPage={setLevel} />
      <BodyWrapper currentLevel={level}/>
    </div>
  );
}

export default App;
