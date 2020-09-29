import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        margin: 0,
        width: '100%',
        height: '56px',
        textAlign: 'center',
        backgroundColor: '#00a500',
        position: 'fixed', 
        bottom: '0px',
    },
    description: {
        marginTop: '16px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    descriptionBold: {
        marginTop: '16px',
        textAlign: 'center',
        fontStyle: 'italic',
        color: theme.palette.text.secondary,
        fontWeight: 'bold',
    },
}));

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <div className={classes.descriptionBold}><span className={classes.description}>COPYRIGHT ©</span> 2020 David Chen-Fitzgerald</div>
        </div>
    );
}