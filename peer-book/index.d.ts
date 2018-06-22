// Type definitions for peer-book 0.8.0
// Project: https://github.com/libp2p/js-peer-book
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'peer-book' {
// @ts-ignore
import PeerId from 'peer-id';
// @ts-ignore
import PeerInfo from 'peer-info';

class PeerBook {
    constructor ();

    get (peer: PeerId | PeerInfo | string): PeerInfo;
    getAll (): { [peerId: string]: PeerInfo };
    getAllArray (): PeerInfo[];
    getMultiaddrs (peer: PeerId | PeerInfo | string): string[];
    has (peer: PeerId | PeerInfo | string): boolean;
    put (peerInfo: PeerInfo, replace?: boolean): PeerInfo;
    remove (peerInfo: PeerInfo, replace?: boolean): void;
}

export = PeerBook;
}
