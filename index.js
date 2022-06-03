const { readFileSync } = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<head><link rel="stylesheet" href="/style"></head><h1>Hello World</h1> <img src="/img" alt="">');
            break;
            case '/style':
                res.statusCode= 200;
                res.setHeader('Content-Type','text/css');
                const css= readFileSync('./style.css');
                res.end(css);
                break;
                case '/img':
                    res.statusCode=200;
                    res.setHeader('Content-Type','image/png')
                    const img= readFileSync('./mario.png');
                    res.end(img);
                    break;

                case '/userData':
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    const users= readFileSync('./users.json');
                    res.end(users)
                    break;

            default:
            
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('page is Not Found');

            break;
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
