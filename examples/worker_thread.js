// Workers (threads) are useful for performing CPU-intensive JavaScript operations. 
// They do not help much with I/O-intensive work. The Node.js built-in asynchronous I/O operations are more efficient than Workers can be.
const worker = require('node:worker_threads');
// Unlike child_process or cluster, worker_threads can share memory. 
// They do so by transferring ArrayBuffer instances or sharing SharedArrayBuffer instances.


