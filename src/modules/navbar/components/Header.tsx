import React from 'react';
import ButtonBar from './ButtonBar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titleBackground: {
        backgroundColor: '#00a500', 
        margin: 0,
        padding: '25px 0 0 0',
    },
    title: {
        textAlign: 'center',
        fontStyle: 'italic',
        textDecoration: 'underline',
        color: '#bfc90f',
    },
    description: {
        marginTop: `-${theme.spacing(1.5)}px`,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: theme.spacing(2.5),
        color: theme.palette.text.secondary,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.titleBackground}>
            <h1 className={classes.title}>HSK Practice</h1>
            <div className={classes.description}>Get yourself ready for your HSK Exam by practicing with flashcards.</div>
            <ButtonBar />
        </div>
    );
};

export default Header;