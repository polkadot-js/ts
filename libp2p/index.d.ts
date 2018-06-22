// Type definitions for libp2p 0.20.4
// Project: https://github.com/libp2p/js-libp2p
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'libp2p' {
// @ts-ignore
import { Connection } from 'interface-connection';
// @ts-ignore
import { Transport } from 'interface-transport';
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
// @ts-ignore
import PeerBook from 'peer-book';
// @ts-ignore
import PeerInfo from 'peer-info';

type CreateOptions = {
    DHT: typeof Libp2pKadDHT,
    connection: {
        crypto: Array<LibP2pSecio>,
        muxer: Array<LibP2pMplex | LibP2pSpdy>
    },
    discovery: Array<LibP2pRailing | LibP2pMdns>,
    transport: Transport[]
};

type Events = 'peer:connect' | 'peer:disconnect' | 'peer:discovery' | 'start' | 'stop';

export class LibP2p {
    constructor (peerInfo: PeerInfo, PeerBook: PeerBook, options: CreateOptions);

    dial (peerInfo: PeerInfo, cb: (error: Error | null) => any): void;
    dialProtocol (peerInfo: PeerInfo, protocol: string, cb: (error: Error | null, conn?: Connection) => any): void;
    handle (protocol: string, handler: (protocol: string, conn: Connection) => any, matcher?: (protocol: string, requestedProtocol: string, cb: (error: Error | null, accept: boolean) => void) => any): void;
    isStarted (): boolean;
    on (event: Events, cb: (event: any) => any): void;
    start (cb: (error: Error | null) => any): void;
    stop (cb: (error: Error | null) => any): void;
}

const libp2p: LibP2p;

export default libp2p;
}
