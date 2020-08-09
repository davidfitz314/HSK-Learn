import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Card } from './Card';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { languageGroups } from './Utils/Types';

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
}

export const CardPageNavigation = ({items, cardsPerPage}: cardPageNavProps) => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [maxPage, setMaxPage] = useState((items.length) / cardsPerPage)
    const nextPage = () => { 
        if (maxPage - 1 > page) {
            setPage(page+1);
        } else {
            setPage(0);
        }
    }
    const prevPage = () => {
        if (page > 0){
            setPage(page - 1);
        } else {
            setPage(maxPage - 1);
        }
    }
    return (
        <div className={classes.content}>
        <Grid container alignItems='center' justify='center'>
            {items && items.map((item, key) => {
            return (
                    <Grid key={key} item xs={2} className={classes.gridSpacing}>
                        <Card card={item} key={key} nextPage={nextPage} prevPage={prevPage} />
                    </Grid>
                );
            })}
        </Grid>
        <p style={{ textAlign: 'center' }}>Page: {page}</p>
        </div>
    )
}