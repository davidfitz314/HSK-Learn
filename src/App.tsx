import React,  { useState, useEffect } from 'react';
import { NavBar } from './components/navigation/NavBar';
import { BodyWrapper } from './components/flashCardsSimple/BodyWrapper';
import { languageGroups } from './components/flashCardsSimple/Utils/Types';
import { cardGroups } from './components/flashCardsSimple/Utils/Types';
import level1 from './jsontextfiles/level1.json';
import level2 from './jsontextfiles/level2.json';
import { MockCardApi } from './Apis/MockCardApi';
import { CategoryEnum } from './Utils/Types';
import Header from './modules/navbar/components/Header';
import Footer from './modules/footer/components/Footer';
import CardsBody from './modules/cards/components/CardsBody';
import CardsApiProvider from './Providers/CardsApiProvider';
import CardsMediatorProvider from './Providers/CardsMediatorProvider';


//TODO: since card levels are built on top of eachother maybe add a way to remove previous level cards
function App() {
  const [level, setLevel] = useState(1);
  const levels = [level1, level2];
  const allCardWords: languageGroups[] = [];
  const [currentCardLevel, setCurrentCardLevel] = useState<cardGroups[]>();
  const cardMed = new MockCardApi();
  console.log("all",cardMed.getAllCards());
  console.log("by level",cardMed.getCardsByLevel(1));
  console.log("by category",cardMed.getCardsByCategory(CategoryEnum.NOUN));
  console.log("by level and category",cardMed.getCardsByCategoryForLevel(CategoryEnum.VERB, 2));
  useEffect(() => {
    if (level <= 2) {
      setCurrentCardLevel(levels[level-1]);
      levels[level - 1].forEach(group => group.items.map(each => allCardWords.push(each)));
    }
    else {
      setCurrentCardLevel(levels[0]);
      levels[0].forEach(group => group.items.map(each => allCardWords.push(each)));
    }
  }, [level, allCardWords, levels])
  
    
  return (
    <div id="wrapper">
      <CardsApiProvider>
        <CardsMediatorProvider>
          <Header />
          <CardsBody />
        </CardsMediatorProvider>
      </CardsApiProvider>
      <NavBar id="header" setPage={setLevel} />
      {currentCardLevel && (<BodyWrapper currentLevel={level} allCardWords={allCardWords} level={currentCardLevel} />)}
      <Footer />
    </div>
  );
}

export default App;
