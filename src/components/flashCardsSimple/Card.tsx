import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { CardFace } from './CardFace';
import { languageGroups } from './Utils/Types';

type cardTypes = {
    card: languageGroups,
    english: boolean,
}

export const Card = ({ card, english}: cardTypes) => {
    const [flipped, setFlipped] = useState(false);
    const setCardFlip = () => setFlipped(!flipped);
    return (
        <>
        {!english && (
            <ReactCardFlip isFlipped={flipped} infinite>
                <CardFace key="front" text={card.chinese} flip={setCardFlip} hint={card.pinyin} />
                <CardFace key="back" text={card.english} flip={setCardFlip} />
            </ReactCardFlip>)}
        {english && (
            <ReactCardFlip isFlipped={flipped} infinite>
                <CardFace key="front" text={card.english} flip={setCardFlip} />
                <CardFace key="back" text={card.chinese} flip={setCardFlip} hint={card.pinyin} />
            </ReactCardFlip>
        )}
        </>
    );
}