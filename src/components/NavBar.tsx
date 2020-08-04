import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    navBar: {
        flexGrow: 1,
        margin: 0,
        borderRadius: '5px',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: '#d3E145',
        color: theme.palette.text.secondary,
        margin: theme.spacing(.5),
    },
    line: {
        border: '1px solid #aeb301',
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

type NavBarProps = {
    id: string,
}

export const NavBar = (props: NavBarProps) => {
    const classes = useStyles();
    return (
        <div id={props.id}>
            <h1 className={classes.title}>HSK Practice</h1>
            <div className={classes.description}>Get yourself ready for your HSK's Level Exam by practicing with flashcards.</div>
            <div className={classes.navBar}>
                <hr className={classes.line} />
                <Grid container className={classes.navBar} justify="space-around">
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>Level 1</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>Level 2</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>Level 3</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>Level 4</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>Level 5</Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper className={classes.paper}>Level 6</Paper>
                    </Grid>
                </Grid>
                <hr className={classes.line} style={{ marginBottom: 0 }} />
            </div>
        </div>
    );
};