import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Card } from './Card';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { languageGroups } from './Utils/Types';
import ArrowBackOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardOutlined from '@material-ui/icons/ArrowForwardIosOutlined'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        marginTop: theme.spacing(8),
    },
    gridSpacing: {
        margin: theme.spacing(2),
    },
}));

type cardPageNavProps = {
    items: languageGroups[],
    cardsPerPage: number,
    page: number,
    setPage: (num: number) => void,
}

const shuffle = (array: languageGroups[]) => {
    return array.sort(() => Math.random() - 0.5);
}

const getCardsPerPage = (items: languageGroups[], cardsPerPage: number) => {
    const outArray = [];
    var i = 0;
    var j = 0;
    while (i !== items.length){
        const innerArray: languageGroups[] = [];
        while (j < cardsPerPage){
            innerArray.push(items[i])
            i++;
            j++;
            if (i >= items.length) break;
        }
        outArray.push(innerArray);
        j = 0;
    }
    return outArray;
}

export const CardPageNavigation = ({items, cardsPerPage, page, setPage}: cardPageNavProps) => {
    const classes = useStyles();
    const shuffledItems = shuffle(items);
    const cardsArray: languageGroups[][] = getCardsPerPage(shuffledItems, cardsPerPage);
    const [english, setEnglish] = useState(false);
    console.log('cardsArray', cardsArray);
    const nextPage = () => { 
        if (cardsArray.length - 1 > page) {
            setPage(page+1);
        } else {
            setPage(0);
        }
    }
    const prevPage = () => {
        if (page > 0){
            setPage(page - 1);
        } else {
            setPage(cardsArray.length - 1);
        }
    }
    
    return (
        <div className={classes.content}>
        <Grid container alignItems='center' justify='center' style={{ color: '#d3E145' }}>
            {cardsArray[page] && cardsArray[page].map((item, key) => {
            return (
                    <Grid key={key} item xs={2} className={classes.gridSpacing}>
                        <Card card={item} key={key} english={english} />
                    </Grid>
                );
            })}
        </Grid>
        <Grid container alignItems='center' justify='center' style={{ position: 'fixed', bottom: 0,
  right: 0 }}>
            <Grid item xs style={{ textAlign: 'right', marginLeft: '32px', color: '#006400' }}>
                <IconButton color="inherit" onClick={()=>{prevPage()}} aria-label="back">
                    <ArrowBackOutlined fontSize='large' aria-label='back' />
                </IconButton>
            </Grid>
            <Grid item xs style={{ textAlign: 'center', color: '#006400'  }}>
                <h3>Page: {page+1}</h3>
            </Grid>
            <Grid item xs  style={{ textAlign: 'left', marginRight: '32px', color: '#006400' }}>
                <IconButton color="inherit" onClick={()=>{nextPage()}} aria-label="forward">
                    <ArrowForwardOutlined fontSize='large' aria-label='forward' />
                </IconButton>
            </Grid>
        </Grid>
        <IconButton  color="inherit" onClick={()=>setEnglish(!english)} style={{ height: '32px', width: '32px', position: 'fixed', bottom: '12px', right: '32px', border: ' 1.5px solid #006400' }} aria-label="forward">
            <p style={{ fontSize: 'medium', color: '#006400' }}>{!english ? 'EN' : 'CN'}</p>
        </IconButton>
        
        </div>
    )
}