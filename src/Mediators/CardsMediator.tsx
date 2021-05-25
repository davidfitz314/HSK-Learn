import { ICardsApi } from '../Apis/ICardApi';
import { ObservableValue } from '../Utils/mediator/ObservableValue';
import { CardType } from '../Utils/Types';

export class CardsMediator {
    api: ICardsApi;
    private allCards = new ObservableValue<CardType[]>([]);
    readonly currentLevelCards = new ObservableValue<CardType[] | null>(null);
    readonly cardLevels = new ObservableValue<number[] | null>(null);
    currentLevel = new ObservableValue<number | null>(null);
    readonly categories = new ObservableValue<string[]>([]);
    selectedCategory = new ObservableValue<string | undefined>(undefined);
    cardsByCategory = new ObservableValue<CardType[]>([]);

    constructor(api: ICardsApi){
        this.api = api;
        this.getAllCards();
        const tempLevels = [1,2,3,4,5,6];
        this.cardLevels.setValue(tempLevels);
        this.setLevel(1);
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

    setLevel = async (level: number) => {
        //TODO: write checks for level range
        this.currentLevel.setValue(level);
        await this.getCardsForLevel();
        this.selectedCategory.setValue(undefined);
        this.cardsByCategory.setValue([]);
    }

    getCardCategories(){
        const allCategories = this.allCards.getValue().map(card => card.category);
        return this.categories.setValue(this.removeDuplicates(allCategories));
    }

    private removeDuplicates(myArray: string[]){
        const noDuplicates: string[] = [];
        myArray.forEach(item => {
            const found = noDuplicates.find(each => each.includes(item))
            if (!found) noDuplicates.push(item);
        });
        return noDuplicates;
    }

    setSelectedCategory = async (category: string) => {
        await this.selectedCategory.setValue(category);
        await this.setCardsByCategory();
    }

    setCardsByCategory(){
        const category = this.selectedCategory.getValue();
        const levelCards = this.currentLevelCards.getValue();
        if (!levelCards || !category) {
            this.cardsByCategory.setValue([]);
            return;
        }
        if (category.toLowerCase().includes("all")){
            this.cardsByCategory.setValue(levelCards);
            return;
        } else {
            // TODO: Add an error in case no cards were found in specified category?
            this.cardsByCategory.setValue(levelCards.filter(card => card.category.includes(category)));
        }
    }

    reset(){
        this.allCards.setValue([]);
        this.currentLevelCards.setValue(null);
        this.getAllCards();
        this.currentLevel.setValue(1);
        const tempLevels = [1,2,3,4,5,6];
        this.cardLevels.setValue(tempLevels);
        this.categories.setValue([]);
        this.selectedCategory.setValue(undefined);
        this.cardsByCategory.setValue([]);
    }

    // Disposes of mediators in case of unmounting the component
    dispose(){
        this.allCards.dispose();
        this.currentLevelCards.dispose();
        this.currentLevel.dispose();
        this.cardLevels.dispose();
        this.categories.dispose();
        this.selectedCategory.dispose();
        this.cardsByCategory.dispose();
    }
}