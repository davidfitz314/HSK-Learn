import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import level1 from '../jsontextfiles/level1.json';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CardDisplay } from './CardDisplay';

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
}

interface languageGroups {
    chinese: string;
    pinyin: string;
    english: string;
}

type cardTypes = {
    type: string,
    items: languageGroups[],
}

export const BodyWrapper = (props: bodyWrapperProps ) => {
    const classes = useStyles();
    const allCardWords: languageGroups[] = [];
    level1.map(group => group.items.map(each => allCardWords.push(each)));
    const [category, setSelectedCategory] = useState<cardTypes>({ type: "All Cards", items: allCardWords });
    const [open, setOpen] = useState(false);
    const openCategoryDialog = (cat: cardTypes) => {
        setSelectedCategory(cat);
        setOpen(true);
    }
    const closeCategoryDialog = () => {
        setSelectedCategory({ type: "All Cards", items: allCardWords });
        setOpen(false);
    }
    return (
        <div className={classes.bodyWrapper}>
            <h3>HSK Level {props.currentLevel}</h3>
            <Grid container alignContent='stretch'>
                {props.currentLevel === 1 && level1 && level1.map((subject, key) => {
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
            <CardDisplay cardObj={category} open={open} handleClose={closeCategoryDialog} />
            {props.children}
        </div>
    )
}