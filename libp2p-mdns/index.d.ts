// Type definitions for libp2p-mdns 0.12.0
// Project: https://github.com/libp2p/js-libp2p-mdns
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import PeerInfo from 'peer-info';

type Options = {
  broadcast?: boolean,
  interval?: number,
  peerInfo: PeerInfo,
  port?: number,
  serviceTag?: string
};

type Events = 'peer';

declare class LibP2pMdns {
  constructor (options: Options);

  on (event: Events, cb: (peerInfo: PeerInfo) => any): void;
}

export default LibP2pMdns;
