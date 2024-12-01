const stream = require('node:stream');
// abstract API for implementing streaming data.
// Made with EventEmitter

// Writable : fs.createWriteStream
// Readable : fs.createReadStream
// Duplex : Writable + Readable : net.Socket
// Transform : zlib.createDeflate
// stream.duplexPair(), stream.pipeline(), stream.finished() stream.Readable.from(), and stream.addAbortSignal().
// const stream = require('node:stream/promises');
// const stream = require('node:stream').promises;
