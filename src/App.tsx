import React,  { useState } from 'react';
import { NavBar } from './components/NavBar';
import { BodyWrapper } from './components/BodyWrapper';
import { languageGroups } from './components/Utils/Types';
import level1 from './jsontextfiles/level1.json';

function App() {
  const [level, setLevel] = useState(1);
  const allCardWords: languageGroups[] = [];
  level1.map(group => group.items.map(each => allCardWords.push(each)));
  return (
    <div id="wrapper">
      <NavBar id="header" setPage={setLevel} />
      <BodyWrapper currentLevel={level} allCardWords={allCardWords} level={level1} />
    </div>
  );
}

export default App;
