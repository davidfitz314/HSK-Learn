import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    cardStyle: {
        backgroundColor: '#00a500',
        margin: 'auto',
        width: '100%',
        padding: `${theme.spacing(15)}px ${theme.spacing(0)}px`,
        textAlign: 'center',
        border: '1px solid #aeb301',
        borderRadius: theme.spacing(3),
    }
}));

type cardFaceProps = {
    text: string,
    hint?: string,
    flip: () => void;
}

export const CardFace = ({text, hint, flip}: cardFaceProps) => {
    const classes = useStyles();
    return (
        <div onClick={()=>flip()} className={classes.cardStyle}><h2>{text}</h2></div>
    )
};