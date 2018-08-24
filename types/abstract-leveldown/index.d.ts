// Type definitions for abstract-leveldown
// Project: https://github.com/Level/abstract-leveldown
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class AbstractLevelDOWN {
  constructor (location: string);
}

declare module 'abstract-leveldown' {
type AbstractLevelDOWN = typeof AbstractLevelDOWN;

export {
  AbstractLevelDOWN
};
}
