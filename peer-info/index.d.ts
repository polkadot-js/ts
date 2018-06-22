// Type definitions for peer-info 0.14.1
// Project: https://github.com/libp2p/js-peer-info
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

// @ts-ignore
import MultiAddr from 'multiaddr';
// @ts-ignore
import PeerId from 'peer-id';

declare module 'peer-info' {
type CreateCb = (error: Error | null, peerId?: PeerId) => any;

type CreateOptions = {
    bits: number
};

type JSON = {
    id: string,
    pubKey: string,
    privKey: string
};

type MultiAddrSet = {
    size: number;

    add (addr: MultiAddr): void;
    addSafe (add: MultiAddr): void;
    delete (addr: MultiAddr): void;
    forEach (cb: (addr: MultiAddr, index: number) => any): void;
    has (addr: MultiAddr): boolean;
    replace (addr: MultiAddr, other: MultiAddr): void;
    toArray (): MultiAddr[];
};

class PeerInfo {
    constructor (id?: PeerId);

    static create (optsOrCb: CreateOptions | CreateCb, cb?: CreateCb): PeerInfo;
    static isPeerInfo (info: any): info is PeerInfo;

    multiaddrs: MultiAddrSet;

    connect (addr: MultiAddr): void;
    disconnect (): void;
    isConnected (): boolean;
}

export = PeerInfo;
}
