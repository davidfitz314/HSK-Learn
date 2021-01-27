import { CardType, CategoryEnum } from '../Utils/Types';

interface CardApi {
    getAllCards: () => Promise<CardType[]>;
    getCardsByLevel: (level: number) => Promise<CardType[]>;
    getCardsByCategory: (category: CategoryEnum) => Promise<CardType[]>;
    getCardsByCategoryForLevel: (category: CategoryEnum, level: number) => Promise<CardType[]>;
}

export default CardApi;