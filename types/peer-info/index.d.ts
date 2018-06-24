// Type definitions for peer-info 0.14.1
// Project: https://github.com/libp2p/js-peer-info
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
/// <reference types="multiaddr"/>
/// <reference types="peer-id"/>

declare namespace PeerInfo {
    type CreateCb = (error: Error | null, peerId?: PeerId) => any;

    type CreateOptions = {
        bits: number
    };

    type MultiAddrSet = {
        size: number;

        add (addr: MultiAddr | string): void;
        addSafe (add: MultiAddr | string): void;
        delete (addr: MultiAddr): void;
        forEach (cb: (addr: MultiAddr, index: number) => any): void;
        has (addr: MultiAddr): boolean;
        replace (addr: MultiAddr, other: MultiAddr): void;
        toArray (): MultiAddr[];
    };
}

declare class PeerInfo {
    constructor (id?: PeerId);

    static create (optsOrCb: PeerInfo.CreateOptions | PeerInfo.CreateCb, cb?: PeerInfo.CreateCb): PeerInfo;
    static isPeerInfo (info: any): info is PeerInfo;

    id: PeerId;
    multiaddrs: PeerInfo.MultiAddrSet;

    connect (addr: MultiAddr): void;
    disconnect (): void;
    isConnected (): boolean;
}

declare module 'peer-info' {
export default PeerInfo;
}
