// Type definitions for libp2p 0.20.4
// Project: https://github.com/libp2p/js-libp2p
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Connection = require('interface-connection');
import Transport = require('interface-transport');
import Libp2pKadDHT = require('libp2p-kad-dht');
import LibP2pMdns = require('libp2p-mdns');
import LibP2pMplex = require('libp2p-mplex');
import LibP2pRailing = require('libp2p-railing');
import LibP2pSecio = require('libp2p-secio');
import LibP2pSpdy = require('libp2p-spdy');
import PeerBook = require('peer-book');
import PeerInfo = require('peer-info');

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

declare class LibP2p {
    constructor (peerInfo: PeerInfo, PeerBook: PeerBook, options: CreateOptions);

    dial (peerInfo: PeerInfo, cb: (error: Error | null) => any): void;
    dialProtocol (peerInfo: PeerInfo, protocol: string, cb: (error: Error | null, conn?: Connection) => any): void;
    handle (protocol: string, handler: (protocol: string, conn: Connection) => any, matcher?: (protocol: string, requestedProtocol: string, cb: (error: Error | null, accept: boolean) => void) => any): void;
    isStarted (): boolean;
    on (event: Events, cb: (event: any) => any): void;
    start (cb: (error: Error | null) => any): void;
    stop (cb: (error: Error | null) => any): void;
}

export = LibP2p;
