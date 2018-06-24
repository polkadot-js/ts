// Type definitions for store 2.0.12
// Project: https://github.com/marcuswestin/store.js
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module 'sodium' {
type SodiumKeyPair = {
    getPublicKey (): {
        baseBuffer: Buffer
    }
}
type Sodium = {
    Key: {
        Sign: {
            fromSeed (seed: Buffer): SodiumKeyPair
        }
    }
}

const sodium: Sodium;

export default sodium;
}
