import React, { createContext, useEffect, useState } from 'react';
import { useCardsApi } from './CardsApiProvider';
import makeContextHook from '../hooks/MakeContextHook';
import { CardsMediator } from '../Mediators/CardsMediator';

const mediatorContext = createContext<CardsMediator | undefined>(undefined);

export const useCardsMediator = makeContextHook(mediatorContext);

const CardsMediatorProvider: React.FC = ({ children }) => {
    const api = useCardsApi();

    const [mediator] = useState(() => {
        return new CardsMediator(api);
    });

    useEffect(() => () => { mediator.dispose()}, [mediator]);
    return <mediatorContext.Provider value={mediator}>{children}</mediatorContext.Provider>;
};

export default CardsMediatorProvider;