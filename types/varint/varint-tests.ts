// @ts-ignore
import varint from 'varint';

varint.encode(300);
varint.encode.bytes;

varint.decode(Buffer.from([0xa7, 0x02]));
varint.decode.bytes;
