import React from 'react';
import Categories from './Categories';
import LevelDisplay from './LevelDisplay';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useCardsMediator } from '../../../Providers/CardsMediatorProvider';
import { useValue } from '../../../Utils/hooks/useValue';
import CardsDialog from '../../../modules/cards/components/CardsDialog';

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

const CardsBody = () => {
    const classes = useStyles();
    const mediator = useCardsMediator();
    const selectedCategory = useValue(mediator.selectedCategory);
    const currentCards = useValue(mediator.cardsByCategory);
    console.log('cat cards', currentCards);
    return (
        <div className={classes.bodyWrapper}>
            <LevelDisplay />
            <Categories />
            <CardsDialog />
        </div>
    )
}

export default CardsBody;