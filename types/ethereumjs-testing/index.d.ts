// Type definitions for ethereumjs-testing
// Project: https://github.com/ethereumjs/ethereumjs-testing
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'ethereumjs-testing' {
type Tests = {
    [index: string]: {
    in: string,
    out: string,
    root: string
    }
};

export const getSingleFile: (name: string) => Tests;
}
