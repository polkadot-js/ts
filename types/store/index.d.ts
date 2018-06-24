// Type definitions for store 2.0.12
// Project: https://github.com/marcuswestin/store.js
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'store' {
type EachCb = (value: any, key: string) => void;
type Store = {
    each: (fn: EachCb) => void,
    get: (key: string) => any,
    remove: (key: string) => any,
    set: (key: string, value: any) => void,
}

const store: Store;

export default store;
}
