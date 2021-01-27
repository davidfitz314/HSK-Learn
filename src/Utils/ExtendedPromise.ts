// TODO: implement an extended promise?
export interface ExtendedPromise<T> extends Promise<T> {
    isFulfilled: () => boolean;
    isCancelled: () => boolean;
}