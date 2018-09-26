const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let result = {
        name: 'Item',
        value: '25',
        color: 'red'
    };

    res.write(JSON.stringify(result));
    
    // res.write('hi');
    res.end();
}).listen(8080);

console.log('escuchando puerto 8080');