import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { CardFace } from './CardFace';
import { languageGroups } from './Utils/Types';

type cardTypes = {
    card: languageGroups,
    nextPage: () => void,
    prevPage: () => void,
}

export const Card = (props: cardTypes) => {
    const [flipped, setFlipped] = useState(false);
    const setCardFlip = () => setFlipped(!flipped);
    return (
        <ReactCardFlip isFlipped={flipped} infinite>
            <CardFace key="front" text={props.card.chinese} flip={setCardFlip} hint={props.card.pinyin} />
            <CardFace key="back" text={props.card.english} flip={setCardFlip} />
        </ReactCardFlip>
    );
}