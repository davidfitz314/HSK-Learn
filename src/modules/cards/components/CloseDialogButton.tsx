import React from 'react';
import { useCardsMediator } from '../../../Providers/CardsMediatorProvider';

const CloseDialogButton = () => {
    const mediator = useCardsMediator();
    return <button onClick={() => mediator.setSelectedCategory("")}>Close</button>
}

export default CloseDialogButton;