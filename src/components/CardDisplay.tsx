import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from './Card';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        position: 'relative',
        backgroundColor: '#00a500',
        
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    gridSpacing: {
        margin: theme.spacing(2),
        backgroundColor: 'yellow',
        textAlign: 'center',
    }
}));

interface languageGroups {
    chinese: string;
    pinyin: string;
    english: string;
}

type cardGroups = {
    type: string,
    items: languageGroups[],
}

type cardProps = {
    cardObj: cardGroups,
    open: boolean,
    handleClose: () => void,
}

export const CardDisplay = (props: cardProps) => {
    const classes = useStyles();
    // TODO: change arrow to be a back button, move category to center, add select statement to right for limiting number of cards
    return (
        <div>
            <Dialog fullScreen open={props.open} onClose={props.handleClose}>
                <AppBar className={classes.appBar}>
                    <Grid container alignItems='center'>
                        <Grid item xs={11} style={{ paddingLeft: '3%' }}>
                            <Typography variant="h6" className={classes.title}>
                                {`Category: `}<strong>{props.cardObj.type}</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton color="inherit" onClick={props.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </AppBar>
                <Grid container alignItems='center' justify='center'>
                    {props.cardObj.items && props.cardObj.items.map((item, key) => {
                        return (
                                <Grid key={key} item xs={3} className={classes.gridSpacing}>
                                    <Card card={item} key={key} />
                                </Grid>
                            );
                        })}
                </Grid>
            </Dialog>
        </div>
    );
}