import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: '25px 15px',
        color: theme.palette.text.primary,
    },
}));

type bodyWrapperProps = {
    id: string,
    children?: any,
}

export const BodyWrapper = (props: bodyWrapperProps) => {
    const classes = useStyles();
    return (
        <div id={props.id} className={classes.padding}>
            Edit <code>src/App.tsx</code> and save to reload.
            {props.children}
        </div>
    )
}