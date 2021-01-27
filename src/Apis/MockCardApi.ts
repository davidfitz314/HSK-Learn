import ICardApi from '../Apis/ICardApi';
import { CategoryEnum, CardType } from '../Utils/Types';
import level1 from '../jsontextfiles/level1.json';
import level2 from '../jsontextfiles/level2.json';
import { resolve } from 'dns';

export class MockCardApi implements ICardApi {
    private allCardsArray: CardType[] = []

    constructor(){
        level1.forEach(group => group.items.forEach(card => {
            const tempCard: CardType = {
                category: group.type,
                level: 1,
                word: card,
            } 
            this.allCardsArray.push(tempCard);
        }))
        level2.forEach(group => group.items.forEach(card => {
            const tempCard: CardType = {
                category: group.type,
                level: 2,
                word: card,
            } 
            if (!this.allCardsArray.find(uniqueCard => uniqueCard.word.english === card.english))
                this.allCardsArray.push(tempCard);
        }))
    }

    // TODO: create reject methods for when params are invalid
    getAllCards(){ return new Promise<CardType[]>(resolve => resolve(this.allCardsArray)) };
    getCardsByLevel(level: number){ return new Promise<CardType[]>(resolve => resolve(this.allCardsArray.filter(card => card.level === level))) };
    getCardsByCategory(category: CategoryEnum){ return new Promise<CardType[]>(resolve => resolve(this.allCardsArray.filter(card => card.category === category))) };
    getCardsByCategoryForLevel(category: CategoryEnum, level: number){ return new Promise<CardType[]>(resolve => resolve(this.allCardsArray.filter(card => card.level === level && card.category === category))) };
    getAllCardsUpToAndIncludingLevel(level: number){ return new Promise<CardType[]>(resolve => resolve(this.allCardsArray.filter(card => card.level <= level))) };
}