import { ICardsApi } from '../Apis/ICardApi';

export class CardsMediator {
    api: ICardsApi;
    constructor(api: ICardsApi){
        this.api = api;
        console.log('my api', this.api);
    }

    // Reset all state/context data
    dispose(){
    }
}