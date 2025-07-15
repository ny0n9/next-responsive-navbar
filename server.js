const { createServer } = require('https');
const { parse } = require('url');
const fs = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
/*
Untuk di local windows 10 tambahkan pada file C:\Windows\System32\drivers\etc\hosts :
  127.0.0.1       localhost
  127.0.0.1       local.lan
  ::1     localhost
  ::1     local.lan
Di public server ganti hostname ini dengan ip / hostname public server
*/
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

/* Untuk letsencrypt gunakan :
 * key: fs.readFileSync('/path/to/letsencrypt/live/your_domain/privkey.pem'),
 * cert: fs.readFileSync('/path/letsencrypt/live/your_domain/fullchain.pem'),
 * ca: fs.readFileSync('/path/letsencrypt/live/your_domain/chain.pem')
**/
const httpsOptions = {
  cert: fs.readFileSync('./certificates/localhost.crt'),
  key: fs.readFileSync('./certificates/localhost.key'),
  ca: [fs.readFileSync('./certificates/rootCA.pem')]
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://${hostname}:${port}`);
  });
});
