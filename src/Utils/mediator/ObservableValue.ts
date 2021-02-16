import { Subject } from 'rxjs';

/*
* ObservableValue class stores a value and notifies interested parties when the value changes
* 
* This is often used as a property on a class that other classes may be interested in.
* 
* uses public get and public set
*/
export class ObservableValue<T, TInitial = T, TError = any> {
    protected key: string | undefined;

    readonly valueSubject = new Subject<T>();
    private _value: T | TInitial;

    readonly errorSubject = new Subject<TError | null>();
    private _error : TError | null = null;

    private readonly _observer = {
        next: (value: T) => this.setValue(value),
        error: (error: TError | null) => this.setError(error),
        complete: () => {},
    };

    constructor(initialState: T | TInitial, key?: string){
        this._value = initialState;
        this.key = key;
    }

    getValue(){
        return this._value;
    }

    setValue(value: T, key?: string){
        this._value = value;
        this.valueSubject.next(value);
        return;
    }

    setError(e:TError | null, key?: string){
        this._error = e;
        this.errorSubject.next(e);
        return;
    }

    getError() {
        return this._error;
    }

    onError(callback: (e: TError | null) => void){
        return this.errorSubject.subscribe({ next: callback });
    }

    onChange(callback: (value: T) => void){
        return this.valueSubject.subscribe({ next: callback });
    }

    dispose() {
        this.valueSubject.complete();
        this.errorSubject.complete();
    }
}