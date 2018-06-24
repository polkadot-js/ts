// Type definitions for tweetnacl 1.0.0
// Project: https://github.com/dchest/tweetnacl-js
// Definitions by: Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

// declare module 'tweetnacl' {
// export type KeypairType = {
//     publicKey: Uint8Array,
//     secretKey: Uint8Array
// };

// type Hash = {
//     (message: Uint8Array): Uint8Array,

//     hashLength: number
// };

// type SecretBox = {
//     (message: Uint8Array, nonce: Uint8Array, secret: Uint8Array): Uint8Array,

//     open: (encrypted: Uint8Array, nonce: Uint8Array, secret: Uint8Array) => Uint8Array | null
// };

// type SignDetached = {
//     (message: Uint8Array, secretKey: Uint8Array): Uint8Array,

//     verify: (message: Uint8Array, signature: Uint8Array, publicKey: Uint8Array) => boolean
// };

// type SignKeypair = {
//     (): KeypairType,

//     fromSecretKey: (secretKey: Uint8Array) => KeypairType,
//     fromSeed: (seed: Uint8Array) => KeypairType,
// };

// type Sign = {
//     (message: Uint8Array, secretKey: Uint8Array): Uint8Array,
//     detached: SignDetached,

//     open: (signedMsg: Uint8Array, publicKey: Uint8Array) => Uint8Array,
//     keyPair: SignKeypair,

//     publicKeyLength: number,
//     secretKeyLength: number,
//     seedLength: number,
//     signatureLength: number,
// };

// type TweetNacl = {
//     randomBytes: (length: number) => Uint8Array,
//     hash: Hash,
//     secretbox: SecretBox,
//     sign: Sign
// };

// const tweetnacl: TweetNacl;

// export default tweetnacl;
// }
