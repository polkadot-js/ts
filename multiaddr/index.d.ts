// Type definitions for multiaddr 5.0.0
// Project: https://github.com/multiformats/js-multiaddr
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import PeerId from 'peer-id';

type Address = {
    family: string,
    host: string,
    port: string
};

type Options = Address & {
    transport: string
};

type Proto = {
    code: number,
    name: string,
    size: number
};

type Tuple = [ number, Buffer ];

type TupleString = [ number, string ];

declare class Multiaddr {
    constructor (addr: Multiaddr | Buffer | string);

    static isMultiaddr (addr: Multiaddr): addr is Multiaddr;
    static isName (other: Multiaddr): boolean;
    static fromNodeAddress (addr: { address: string, port: string }, transport: string): Multiaddr;

    decapsulate (other: Multiaddr): Multiaddr;
    encapsulate (other: Multiaddr): Multiaddr;
    equals (other: Multiaddr): boolean;
    getPeerId (): PeerId;
    inspect (): string;
    isThinWaistAddress (other?: Multiaddr): boolean;
    nodeAddress (): Address;
    protos (): Proto[];
    protoCodes (): number[];
    protoNames (): string[];
    stringTuples (): TupleString[];
    tuples (): Tuple[];
    toOptions (): Options;
    toString (): string;
}

export default Multiaddr;
