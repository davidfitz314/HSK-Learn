import React from 'react';
//Excluded undefined from T
type NonUndefined<T> = T extends undefined ? never : T;

// Factory function for creating context
const makeContextHook = <T>(context: React.Context<T>) => {
    return () => {
        const contextValue = React.useContext(context);
        if (contextValue === undefined){
            throw new Error('Context must be used within a context provider.');
        }
        return contextValue as NonUndefined<T>;
    };
};
export default makeContextHook;