import React from 'react';
import { useCardsMediator } from '../../../Providers/CardsMediatorProvider';
import { useValue } from '../../../Utils/hooks/useValue';

const LevelDisplay: React.FC = () => {
    const mediator = useCardsMediator();
    const level = useValue(mediator.currentLevel);
    return (
        <>{level && (<h3>HSK Level {level}</h3>)}</>
    )
}

export default LevelDisplay;