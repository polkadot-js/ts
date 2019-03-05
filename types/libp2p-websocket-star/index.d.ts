// Type definitions for libp2p-websocket-star 0.15.3
// Project: https://github.com/libp2p/js-libp2p-websocket-star
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="interface-transport"/>
/// <reference types="libp2p-bootstrap"/>

declare class LibP2pWebsocketStar implements LibP2pTransport {
    constructor(config?: any);

    discovery: LibP2pBootstrap;
}

declare module 'libp2p-websocket-star' {
    export default LibP2pWebsocketStar;
}
