// Type definitions for libp2p-railing 0.9.1
// Project: https://github.com/libp2p/js-libp2p-railing
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="multiaddr"/>
/// <reference types="peer-info"/>

declare namespace LibP2pRailing {
  type Options = {
    list: Array<string | MultiAddr>,
    interval?: number
  };

  type Events = 'peer';
}

declare class LibP2pRailing {
  constructor (options: LibP2pRailing.Options);

  on (event: LibP2pRailing.Events, cb: (peerInfo: PeerInfo) => any): void;
}

declare module 'libp2p-railing' {
export default LibP2pRailing;
}
