// Type definitions for libp2p-mplex 0.8.0
// Project: https://github.com/libp2p/js-libp2p-mplex
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'libp2p-mplex' {
type Muxer = {};

export type LibP2pMplex = {
  (conn: any, isListener: boolean): Muxer;

  dialer (conn: any): Muxer;
  listener (conn: any): Muxer;

  muticodec: string;
}

const mplex: LibP2pMplex;

export default mplex;
}
