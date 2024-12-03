const http = require('http');
const port = 7777; // 65535까지

const server = http.createServer((req, res) => {
    console.log('Server Started!!!!!');

    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
    res.write(`<h1>Hello Node.js  Client!</h1>`);
    res.write(`<p>I'm your first Node.js Server!! nice to meet you here :)</p>`);
    res.end();
});

server.listen(port);
server.on('listening', () => {
    console.log(`Server is listening to ${port}!`);
});

server.on('error', (error) => {
    console.error(error);
});

