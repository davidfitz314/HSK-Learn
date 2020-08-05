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
            <Grid container alignContent='space-between' justify='space-evenly'>
                {props.currentLevel === 1 && level1 && level1.map((subject, key) => {
                    return (
                        <Grid item xs={4} key={key}>
                            <strong><u><i>{subject.type}</i></u></strong>
                            <ul>
                            {subject.items && subject.items.map((item) => <li>{`${item.chinese} ${item.pinyin} ${item.english}`}</li>)}
                            </ul>
                        </Grid>
                    )
                })}
            </Grid>
            {props.children}
        </div>
    )
}