import { useMemo, useEffect, useReducer } from 'react';
import { ObservableValue } from '../mediator/ObservableValue';
/**
 *  Allows for the subscription to ObservableValue's changes
 */

 // Reduce how often we can call update
 const updateReducer = (num: number): number => (num + 1) % 1_000_000;

 const useUpdate = () => {
     const [, update] = useReducer(updateReducer, 0);
     return update as () => void;
 }

 export function useValue<TValue, TInitial = TValue> (observableValue: ObservableValue<TValue, TInitial>){
    const update = useUpdate();

     const subscription = useMemo(() => {
         return observableValue.onChange(update);
     }, [observableValue, update]);

     useEffect(() => () => subscription.unsubscribe(), [subscription]);

     return observableValue.getValue();
 }