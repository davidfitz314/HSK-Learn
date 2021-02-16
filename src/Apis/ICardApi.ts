import { CardType, CategoryEnum } from '../Utils/Types';

export interface ICardsApi {
    getAllCards: () => Promise<CardType[]>;
    getCardsByLevel: (level: number) => Promise<CardType[]>;
    getCardsByCategory: (category: CategoryEnum) => Promise<CardType[]>;
    getCardsByCategoryForLevel: (category: CategoryEnum, level: number) => Promise<CardType[]>;
}