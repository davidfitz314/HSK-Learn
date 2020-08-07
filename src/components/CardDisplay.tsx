import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        position: 'relative',
        backgroundColor: '#00a500',
        
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
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
    console.log(props.cardObj);
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
                <Grid container>
                    {props.cardObj.items && props.cardObj.items.map((item, key) => {
                        return (
                            <Grid item xs={2}>
                                <ul>
                                    <li key={`${key}-1`}>{item.chinese}</li>
                                    <li key={`${key}-2`}>{item.pinyin}</li>
                                    <li key={`${key}-3`}>{item.english}</li>
                                </ul>
                            </Grid>
                        );
                    })}
                </Grid>
            </Dialog>
        </div>
    );
}