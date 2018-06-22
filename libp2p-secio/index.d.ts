// Type definitions for libp2p-secio 0.10.0
// Project: https://github.com/libp2p/js-libp2p-secio
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'libp2p-secio' {
// @ts-ignore
import PeerId from 'peer-id';

export type LibP2pSecio = {
  tag: '/secio/1.0.0',

  encrypt (localId: PeerId, conn: any, remoteId: PeerId, callback: () => any): void
}

const secio: LibP2pSecio;

export default secio;
}
