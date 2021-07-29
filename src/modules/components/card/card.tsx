import React from 'react';
import { CardType } from '../../../Utils/Types';

interface ICard {
    cardType: CardType;
}
const Card: React.FC<ICard> = ({ cardType }) => {
    return <div>{`${cardType.word.english} ${cardType.word.chinese}`}</div>
};

export default Card;