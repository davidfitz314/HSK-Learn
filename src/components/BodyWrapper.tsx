import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CardDisplay } from './CardDisplay';
import { languageGroups, cardGroups } from './Utils/Types';

const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        backgroundColor: '#bfc90f',
        width: '95%',
        margin: '5px',
    },
    bodyWrapper: {
        margin: '0 auto',
        maxWidth: '940px',
        backgroundColor: '#f0f4bf',
        textAlign: 'center',
        padding: '25px 15px',
        color: theme.palette.text.primary,
      }
}));

type bodyWrapperProps = {
    children?: any,
    currentLevel: number,
    level: cardGroups[],
    allCardWords: languageGroups[],
}

export const BodyWrapper = ({ level, allCardWords, currentLevel, children}: bodyWrapperProps ) => {
    const classes = useStyles();
    
    const [category, setSelectedCategory] = useState<cardGroups>(level[0]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<number>(1);
    const [page, setPage] = useState(0);
    const [english, setEnglish] = useState<boolean>(false);
    const openCategoryDialog = (cat: cardGroups) => {
        setSelectedCategory(cat);
        setOpen(true);
    }
    const closeCategoryDialog = () => {
        setOpen(false);
        setSelected(1);
        setPage(0);
    }
    return (
        <div className={classes.bodyWrapper}>
            <h3>HSK Level {currentLevel}</h3>
            <Grid container alignContent='stretch'>
                {currentLevel === 1 && level && level.map((subject, key) => {
                    return (
                        <Grid item xs={4} key={key}>
                            <Button className={classes.button} onClick={()=>openCategoryDialog(subject)}>{subject.type}</Button>
                        </Grid>
                    )
                })}
                <Grid item xs={4}>
                    <Button className={classes.button} onClick={()=>openCategoryDialog({ type: 'All Cards', items: allCardWords })}>All Cards</Button>
                </Grid>
            </Grid>
            <CardDisplay cardObj={category} open={open} handleClose={closeCategoryDialog} selected={selected} setSelected={setSelected} page={page} setPage={setPage} english={english} setEnglish={setEnglish} />
            {children}
        </div>
    )
}