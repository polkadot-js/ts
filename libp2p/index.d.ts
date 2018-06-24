// Type definitions for libp2p 0.20.4
// Project: https://github.com/libp2p/js-libp2p
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="../interface-connection"/>
/// <reference types="../interface-transport"/>
/// <reference types="../peer-book"/>
/// <reference types="../peer-info"/>

declare namespace LibP2p {
    // FIXME These need to be updated so they can be imported with references as above - for now, HACK it to work... WIP, WIP...

    // @ts-ignore
    import { Libp2pKadDHT } from 'libp2p-kad-dht';
    // @ts-ignore
    import { LibP2pMdns } from 'libp2p-mdns';
    // @ts-ignore
    import { LibP2pMplex } from 'libp2p-mplex';
    // @ts-ignore
    import LibP2pRailing from 'libp2p-railing';
    // @ts-ignore
    import { LibP2pSecio } from 'libp2p-secio';
    // @ts-ignore
    import { LibP2pSpdy } from 'libp2p-spdy';

    type CreateOptions = {
        DHT: typeof Libp2pKadDHT,
        connection: {
            crypto: Array<LibP2pSecio>,
            muxer: Array<LibP2pMplex | LibP2pSpdy>
        },
        discovery: Array<LibP2pRailing | LibP2pMdns>,
        transport: LibP2pTransport[]
    };

    type Events = 'peer:connect' | 'peer:disconnect' | 'peer:discovery' | 'start' | 'stop';
}

declare class LibP2p {
    constructor (peerInfo: PeerInfo, PeerBook: PeerBook, options: LibP2p.CreateOptions);

    dial (peerInfo: PeerInfo, cb: (error: Error | null) => any): void;
    dialProtocol (peerInfo: PeerInfo, protocol: string, cb: (error: Error | null, conn?: LibP2pConnection) => any): void;
    handle (protocol: string, handler: (protocol: string, conn: LibP2pConnection) => any, matcher?: (protocol: string, requestedProtocol: string, cb: (error: Error | null, accept: boolean) => void) => any): void;
    isStarted (): boolean;
    on (event: LibP2p.Events, cb: (event: any) => any): void;
    start (cb: (error: Error | null) => any): void;
    stop (cb: (error: Error | null) => any): void;
}

declare module 'libp2p' {
export default LibP2p;
}
