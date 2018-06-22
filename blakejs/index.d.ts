// Type definitions for blakejs 1.1.0
// Project: https://github.com/dcposch/blakejs
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module 'blakejs' {
type BlakeJsContext = {
    b: Uint8Array,
    h: Uint32Array,
    t: number,
    c: number,
    outlen: number
};

interface BlakeJs {
    blake2b: (data: Buffer | Uint8Array | string, key?: Uint8Array | null, outlen?: number) => Uint8Array,
    blake2bFinal: (context: BlakeJsContext) => Uint8Array,
    blake2bHex: (data: Buffer | Uint8Array | string, key?: Uint8Array | null, outlen?: number) => string,
    blake2bInit: (outlen?: number, key?: Uint8Array) => BlakeJsContext,
    blake2bUpdate: (context: BlakeJsContext, data: Buffer | Uint8Array | string) => void,
    blake2s: (data: Buffer | Uint8Array | string, key?: Uint8Array | null, outlen?: number) => Uint8Array,
    blake2sFinal: (context: BlakeJsContext) => Uint8Array,
    blake2sHex: (data: Buffer | Uint8Array | string, key?: Uint8Array | null, outlen?: number) => string,
    blake2sInit: (outlen?: number, key?: Uint8Array) => BlakeJsContext,
    blake2sUpdate: (context: BlakeJsContext, data: Buffer | Uint8Array | string) => void
}

const blakejs: BlakeJs;

export default blakejs;
}
