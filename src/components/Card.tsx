import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    cardStyle: {
        backgroundColor: '#00a500',
    }
}));

interface languageGroups {
    chinese: string;
    pinyin: string;
    english: string;
}

type cardTypes = {
    card: languageGroups,
    key: any,
}

export const Card = (props: cardTypes) => {
    const classes = useStyles();
    const [flipped, setFlipped] = useState(false);
    return (
        <ReactCardFlip isFlipped={flipped} infinite containerStyle={{ backgroundColor: 'blue' }}>
            <div onClick={() => setFlipped(!flipped)} className={classes.cardStyle} key='front'>
                {props.card.chinese}
            </div>
            <div onClick={() => setFlipped(!flipped)} className={classes.cardStyle} key='back'>
                <ul>
                    <li key={`${props.key}-2`}>{props.card.pinyin}</li>
                    <li key={`${props.key}-3`}>{props.card.english}</li>
                </ul>
            </div>
        </ReactCardFlip>
    );
}