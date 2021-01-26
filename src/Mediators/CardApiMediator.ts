import ICardApi from '../Apis/ICardApi';
import { cardGroups } from '../components/flashCardsSimple/Utils/Types';
import { CardGroups, DefaultLanguageEnum, LanguageGroups } from '../Utils/Types';
import level1 from '../jsontextfiles/level1.json';
import level2 from '../jsontextfiles/level2.json';

export class CardApiMediator implements ICardApi {
    private level: number;
    private currentLevelCardGroups: CardGroups[] = [];
    private allCardGroupsByLevel: CardGroups[][] = [];
    private allUniqueCardsForLevel: LanguageGroups[] = [];
    private defaultLanguage: DefaultLanguageEnum;
    private maxLevel = 2;

    constructor(){
        this.level = 1;
        this.defaultLanguage = DefaultLanguageEnum.Chinese;
        this.allCardGroupsByLevel.push(level1);
        this.allCardGroupsByLevel.push(level2);
        this.currentLevelCardGroups = this.allCardGroupsByLevel[0];
        this.currentLevelCardGroups.forEach(group => group.items.forEach(item => this.allUniqueCardsForLevel.push(item)))
    }

    getCardsGroupsByLevel(level: number) {
        if (level !== this.level && level > 0 && level <= this.maxLevel){
            return new Promise<CardGroups[]>((resolve) => {
                return resolve(this.allCardGroupsByLevel[level-1]);
            });
        }
        return new Promise<cardGroups[]>(reject => reject());
    };

    getAllUniqueCardsForCurrentLevel() {
        return new Promise<LanguageGroups[]>((resolve) => {
            return resolve(this.allUniqueCardsForLevel);
        });
    };

    setCurrentLevel(level: number) {
        if (level > 0 && level <= this.maxLevel && this.level !== level){
            this.level = level;
            return new Promise<boolean>((resolve) => {
                return resolve(true);
            });
        }
        return new Promise<boolean>((reject) => {
            return reject();
        });
    };

    getCurrentLevel() {
        return new Promise<number>((resolve) => {
            return resolve(1);
        });
    };

    setDefaultLanguage (val: DefaultLanguageEnum){
        switch (val){
            case DefaultLanguageEnum.Chinese:
                this.defaultLanguage = DefaultLanguageEnum.Chinese;
                return this.resolvedTruePromise();
            case DefaultLanguageEnum.English:
                this.defaultLanguage = DefaultLanguageEnum.English;
                return this.resolvedTruePromise();
            default:
                return new Promise<boolean>(reject => reject());
        }
    };

    getDefaultLanguage() {
        return new Promise<DefaultLanguageEnum>((resolve) => {
            return resolve(this.defaultLanguage);
        });
    };

    resolvedTruePromise(){
        return new Promise<boolean>((resolve) => {
            resolve(true);
        });
    }
}