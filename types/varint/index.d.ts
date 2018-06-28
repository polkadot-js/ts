// Type definitions for varint 5.0.0
// Project: https://github.com/chrisdickinson/varint
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module 'varint' {
type VarintDecode = {
    (data: Buffer, offset?: number): number,

    readonly bytes: number
}

type VarintEncode = {
    (num: number, buf?: Buffer, offset?: number): Buffer,

    readonly bytes: number
}

interface Varint {
    readonly decode: VarintDecode;
    readonly encode: VarintEncode;

    encodingLength (num: number): number;
}

const varint: Varint;

export default varint;
}
