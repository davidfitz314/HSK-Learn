import React, { createContext, useState } from 'react';
import { ICardsApi } from '../Apis/ICardApi';
import { MockCardApi } from '../Apis/MockCardApi';
import makeContextHook from '../hooks/MakeContextHook';

const apiContext = createContext<ICardsApi | undefined>(undefined);

export const useCardsApi = makeContextHook(apiContext);

interface ICardApiProviderProps {
    api?: ICardsApi;
}

const CardApiProvider: React.FC<ICardApiProviderProps> = ({ children, api }) => {
    const [apiMediator] = useState(() => ( api ? api : new MockCardApi() ));
    return <apiContext.Provider value={apiMediator}>{children}</apiContext.Provider>;
};

export default CardApiProvider;