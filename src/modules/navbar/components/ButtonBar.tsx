import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from './Button';

const useStyles = makeStyles((theme) => ({
    navBar: {
        flexGrow: 1,
        margin: 0,
        borderRadius: '5px',
        padding: '0 5px',
        textAlign: 'center',
    },
    line: {
        border: '1px solid #aeb301',
    },
}));

const ButtonBar = () => {
    const classes = useStyles();
    const levels = [1,2,3,4,5,6];
    return (
        <div className={classes.navBar}>
            <hr className={classes.line} />
                <Grid container className={classes.navBar} justify='center'>
                    {levels.map((level, key) => { 
                        return (
                            <Grid item xs={2} key={`nav-${key}`}>
                                <Button level={level} />
                             </Grid>
                        )
                    })}
                </Grid>
            <hr className={classes.line} style={{ marginBottom: 0 }} />
        </div>
    )
}

export default ButtonBar;