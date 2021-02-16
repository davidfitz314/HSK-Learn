import { ICardsApi } from '../Apis/ICardApi';
import { ObservableValue } from '../Utils/mediator/ObservableValue';
import { CardType } from '../Utils/Types';

export class CardsMediator {
    api: ICardsApi;
    private allCards = new ObservableValue<CardType[] | null>(null);
    readonly currentLevelCards = new ObservableValue<CardType[] | null>(null);
    readonly cardLevels = new ObservableValue<number[] | null>(null);
    currentLevel = new ObservableValue<number | null>(null);

    constructor(api: ICardsApi){
        this.api = api;
        this.getAllCards();
        this.currentLevel.setValue(1);
        const tempLevels = [1,2,3,4,5,6];
        this.cardLevels.setValue(tempLevels);
    }

    getAllCards = () =>{
        try {
            const response = this.api.getAllCards();
            response.then(resp => this.allCards.setValue(resp));
        } catch(err){
            console.warn('Error retrieving cards', err);
        } finally {
            return this.allCards.getValue();
        }
    }

    getCardsByLevel(level: number){
        // TODO should this actually be an error?
        if (level !== this.currentLevel.getValue()){
            this.currentLevel.setValue(level);
        }
        try {
            const response = this.api.getCardsByLevel(level);
            response.then(resp => this.currentLevelCards.setValue(resp))
        } catch(err){
            console.warn("Error retrieving cards by level", err);
        } finally {
            return this.currentLevelCards.getValue();
        }
    }

    getCardsForLevel(){
        const currentLevel = this.currentLevel.getValue();
        if(currentLevel){
            try {
                const response = this.api.getCardsByLevel(currentLevel);
                response.then(resp => this.currentLevelCards.setValue(resp))
            } catch(err){
                console.warn("Error retrieving cards by level", err);
            } finally {
                return this.currentLevelCards.getValue();
            }
        } else {
            // TODO: add checks for level range possibilities
            console.warn('Error Level cannot be null');
        }
    }

    getCardLevels(){
        return this.cardLevels.getValue();
    }

    setLevel(level: number){
        console.log('vel in', level);
        //TODO: write checks for level range
        this.currentLevel.setValue(level);
    }

    // Reset all state/context data
    dispose(){
        this.allCards.dispose();
        this.currentLevelCards.dispose();
        this.currentLevel.dispose();
        this.cardLevels.dispose();
    }
}