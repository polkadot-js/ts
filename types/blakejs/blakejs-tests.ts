import { blake2bHex, blake2sHex } from 'blakejs';

blake2bHex(new Uint8Array([1, 2, 3, 4, 5]));
blake2sHex(Buffer.from([1, 2, 3, 4, 5]));
