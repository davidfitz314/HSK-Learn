import React from 'react';
import { makeStyles } from '@material-ui/core';
import level1 from '../jsontextfiles/level1.json';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: '25px 15px',
        color: theme.palette.text.primary,
    },
}));

type bodyWrapperProps = {
    id: string,
    children?: any,
    currentLevel: number,
}

export const BodyWrapper = (props: bodyWrapperProps) => {
    const classes = useStyles();
    return (
        <div id={props.id} className={classes.padding}>
            <h3>HSK Level {props.currentLevel}</h3>
            <Grid container>
                {level1 && level1.map((subject, key) => {
                    return (
                        <Grid item xs={3} key={key}>
                            {subject.type}
                        </Grid>
                    )
                })}
            </Grid>
            {props.children}
        </div>
    )
}