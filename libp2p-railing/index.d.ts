// Type definitions for libp2p-railing 0.9.1
// Project: https://github.com/libp2p/js-libp2p-railing
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// @ts-ignore
import MultiAddr from 'multiaddr';
// @ts-ignore
import PeerInfo from 'peer-info';

declare module 'libp2p-railing' {
type Options = {
  list: Array<string | MultiAddr>,
  interval?: number
};

type Events = 'peer';

export class LibP2pRailing {
  constructor (options: Options);

  on (event: Events, cb: (peerInfo: PeerInfo) => any): void;
}

export default LibP2pRailing;
}
