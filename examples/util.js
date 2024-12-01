const { promisify } = require('node:util');
const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

do_gzip('input.txt', 'input.txt.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }); 
// All zlib APIs, except those that are explicitly synchronous, use the Node.js internal threadpool.
// Creating and using a large number of zlib objects simultaneously can cause significant memory fragmentation.
