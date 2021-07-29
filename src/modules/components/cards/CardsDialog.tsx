import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useCardsMediator } from '../../../Providers/CardsMediatorProvider';
import { useValue } from '../../../Utils/hooks/useValue';
import CloseDialogButton from './CloseDialogButton';
import { createUseStyles } from 'react-jss';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Card from '../card/card';

const useStyles = createUseStyles(
    {
        closeButton: {
            textAlign: 'right',
            width: '100px',
            position: 'absolute',
        },
        appBar: {
            display: 'grid !important',
            width: '100%',
            position: 'fixed',
            gridTemplateColumns: '1fr 1fr 1fr !important',
            backgroundColor: '#00a500 !important',
            color: '#d3E145',
            textColor: '#d3E145',
        },
        title: {
            textAlign: 'center',
            padding: '6px',
        },
        pagesController: {
            textAlign: 'right',
            padding: '12px 12px 0 0',
        },
        topMarginWrapper: {
            marginTop: '68px !important',
        },
    },
    {
        name: 'CardsDialog',
    }   
);

const CardsDialog = () => {
    const mediator = useCardsMediator();
    const availableCards = useValue(mediator.cardsByCategory);
    const categoryName = useValue(mediator.selectedCategory);
    const classes = useStyles();

    return(
        <Dialog fullScreen open={availableCards.length > 0} onClose={()=> {mediator.setSelectedCategory("")}}>
            <AppBar className={classes.appBar}>
                <div>
                    <CloseDialogButton className={classes.closeButton} />
                </div>
                <div className={classes.title}><Typography variant="h6">Category: <strong>{categoryName}</strong></Typography></div>
                <div className={classes.pagesController}>Test</div>
            </AppBar>
            <div className={classes.topMarginWrapper}>
                {availableCards.map((card, key) => <Card cardType={card} key={key} />)}
            </div>
        </Dialog>
    )
}

export default CardsDialog;