// Type definitions for interface-connection 0.3.2
// Project: https://github.com/libp2p/interface-connection
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// @ts-ignore
import PeerInfo from 'peer-info';

declare module 'interface-connection' {
export interface Connection {
    getPeerInfo (cb: (error: Error | null, peerInfo?: PeerInfo) => any): void;
}
}
