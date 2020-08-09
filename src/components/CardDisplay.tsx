import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { cardGroups } from './Utils/Types';
import { CardPageNavigation } from './CardPageNavigation';

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        position: 'fixed',
        backgroundColor: '#00a500',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 80,
        color: 'white',
        textColor: 'white',
    },
    selectEmpty: {
        color: 'white',
        textColor: 'white',
        textAlign: 'center',
    },
}));

type cardProps = {
    cardObj: cardGroups,
    open: boolean,
    handleClose: () => void,
    selected: number,
    setSelected: (num: number) => void,
}

export const CardDisplay = ({ cardObj, open, handleClose, selected, setSelected }: cardProps) => {
    const { items } = cardObj;
    const classes = useStyles();
    const numsArray: number[] = [];
    for (var i = 0; i < items.length; i++){
        if (i === 0){
            numsArray.push(i+1);
        }
        if (items.length === 1) break;
        if (items.length < 5 && items.length - 1 !== i && i > 0){
            numsArray.push(i);
        } else if (items.length > 5 && items.length < 10 && i % 2 === 0 && items.length -1 !== i && i > 0){
            numsArray.push(i);
        } else if (items.length > 10 && items.length < 20 && i % 3 === 0 && items.length -1 !== i && i > 0){
            numsArray.push(i);
        }else if (items.length > 20 && i % 10 === 0 && items.length -1 !== i && i > 0){
            numsArray.push(i);
        }
        if (items.length - 1 === i){
            numsArray.push(i+1);
        }
    }
    const handleChange = (value: number) => {
        setSelected(value);
    };
    
    return (
        <div>
            <Dialog fullScreen open={open} onClose={handleClose}>
                <AppBar className={classes.appBar}>
                    <Grid container  alignItems='center' justify='space-around' direction="row">
                        <Grid item xs style={{ paddingLeft: '16px' }}>
                            <IconButton color="inherit" onClick={handleClose} aria-label="back">
                                <ArrowBackIcon aria-label='back' />
                            </IconButton>
                        </Grid>
                        <Grid item xs style={{textAlign: 'center' }}>
                            <Typography variant="h6" className={classes.title}>
                                {`Category: `}<strong>{cardObj.type}</strong>
                            </Typography>
                        </Grid>
                        <Grid item xs style={{ textAlign: 'right', paddingRight: '20px' }}>
                            <Grid container alignItems='center' justify='flex-end' direction='row'>
                                <Grid item xs={8} style={{ textAlign: 'right' }}>
                                    <p>Cards Shown</p>
                                </Grid>
                                <Grid item xs={4} style={{ textAlign: 'left' }}>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                        id="select-card-numbers-id"
                                        value={selected}
                                        defaultValue={1}
                                        onChange={(name) => {name && handleChange(name.target.value as number)}}
                                        className={classes.selectEmpty}
                                        >
                                            {numsArray.map((num, key) => {
                                                return (
                                                    <MenuItem value={num} key={key}>{num}</MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
                <CardPageNavigation items={cardObj.items} cardsPerPage={selected} />
            </Dialog>
        </div>
    );
}