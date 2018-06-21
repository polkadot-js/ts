// Type definitions for libp2p-spdy 0.12.1
// Project: https://github.com/libp2p/js-libp2p-spdy
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Muxer = {};

declare type LibP2pSpdy = {
  (conn: any, isListener: boolean): Muxer;

  dialer (conn: any): Muxer;
  listener (conn: any): Muxer;

  muticodec: string;
}

export default LibP2pSpdy;
