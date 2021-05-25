import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useCardsMediator } from '../../../Providers/CardsMediatorProvider';
import { useValue } from '../../../Utils/hooks/useValue';
import CloseDialogButton from './CloseDialogButton';

const CardsDialog = () => {
    const mediator = useCardsMediator();
    const availableCards = useValue(mediator.cardsByCategory);
    return(
        <Dialog fullScreen open={availableCards.length > 0} onClose={()=> {}}>
            {availableCards.map((card, key) => <p key={`${card.word.english}-${key}`}><span>{card.word.english}***</span><span>{card.word.chinese}***</span><span>{card.word.pinyin}</span></p>)}
        <CloseDialogButton /></Dialog>
    )
}

export default CardsDialog;