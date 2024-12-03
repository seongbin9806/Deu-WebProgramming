const http = require('http');
const fs = require('fs').promises;
const port = 7778; // 65535까지

const server = http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('01-server.html'); // Blocking I/O로 동작됨
        res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(data);
    } catch (err) {
        console.log(err);
        res.writeHead(500, { 'Content-type': 'text/html; charset=utf-8' });
        res.end(err.message);
    }
});

server.listen(port, () => {
    console.log(`Server is listening to ${port}!`);
});

server.on('error', (error) => {
    console.error(error);
});

