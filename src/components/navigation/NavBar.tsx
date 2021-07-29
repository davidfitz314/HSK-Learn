import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    navBar: {
        flexGrow: 1,
        margin: 0,
        borderRadius: '5px',
        padding: '0 5px',
        textAlign: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: `${theme.spacing(1)}px ${theme.spacing(8)}px `,
        backgroundColor: '#d3E145',
        color: theme.palette.text.secondary,
        margin: theme.spacing(0),
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
    setPage: (num: number) => void,
}

export const NavBar = (props: NavBarProps) => {
    const classes = useStyles();
    return (
        <div id={props.id}>
            <h1 className={classes.title}>HSK Practice</h1>
            <div className={classes.description}>Get yourself ready for your HSK Exam by practicing with flashcards.</div>
            <div className={classes.navBar}>
                <hr className={classes.line} />
                <Grid container className={classes.navBar}>
                    <Grid item xs={2}>
                        <Button className={classes.paper} onClick={() => props.setPage(1)}>Level 1</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.paper} onClick={() => props.setPage(2)}>Level 2</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.paper} onClick={() => props.setPage(3)}>Level 3</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.paper} onClick={() => props.setPage(4)}>Level 4</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.paper} onClick={() => props.setPage(5)}>Level 5</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button className={classes.paper} onClick={() => props.setPage(6)}>Level 6</Button>
                    </Grid>
                </Grid>
                <hr className={classes.line} style={{ marginBottom: 0 }} />
            </div>
        </div>
    );
};