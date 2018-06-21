// Type definitions for peer-id 0.10.7
// Project: https://github.com/libp2p/js-peer-id
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import MultiAddr from 'multiaddr';
import PeerId from 'peer-id';

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

declare class PeerInfo {
    constructor (id?: PeerId);

    static create (optsOrCb: CreateOptions | CreateCb, cb?: CreateCb): PeerInfo;
    static isPeerInfo (info: any): info is PeerInfo;

    multiaddrs: MultiAddrSet;

    connect (addr: MultiAddr): void;
    disconnect (): void;
    isConnected (): boolean;
}

export default PeerInfo;
