import { CardGroups, DefaultLanguageEnum, LanguageGroups } from '../Utils/Types';

interface CardApi {
    getCardsGroupsByLevel: (level: number) => Promise<CardGroups[]>;
    getAllUniqueCardsForCurrentLevel: () => Promise<LanguageGroups[]>;
    setCurrentLevel: (level: number) => Promise<boolean>;
    getCurrentLevel: () => Promise<number>;
    setDefaultLanguage: (val: DefaultLanguageEnum) => Promise<boolean>;
    getDefaultLanguage: () => Promise<DefaultLanguageEnum>;
}

export default CardApi;