const tty = require('node:tty'); 
// When Node.js detects that it is being run with a text terminal ("TTY") attached, process.stdin will, by default, be initialized as an instance of tty.ReadStream and
//  both process.stdout and process.stderr will, by default, be instances of tty.WriteStream


// node -p -e "Boolean(process.stdout.isTTY)"
function ttyPrint(){
    process.stdout.on('resize', () => {
        console.log('screen size has changed!');
        console.log(`${process.stdout.columns}x${process.stdout.rows}`);
    });
    setTimeout(()=>{
        console.log("TIMEOUT...");
    },10000);
}
module.exports = ttyPrint;
