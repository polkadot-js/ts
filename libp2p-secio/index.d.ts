// Type definitions for libp2p-secio 0.10.0
// Project: https://github.com/libp2p/js-libp2p-secio
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import PeerId from 'peer-id';

declare type LibP2pSecio = {
  tag: '/secio/1.0.0',

  encrypt (localId: PeerId, conn: any, remoteId: PeerId, callback: () => any): void
}

export default LibP2pSecio;
