// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// create web server
http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(404);
    res.end();
    return;
  }

  if (req.url === '/') {
    fs.readFile('comment.html', 'utf8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url.startsWith('/comment')) {
    const parsedUrl = url.parse(req.url);
    const parsedQuery = qs.parse(parsedUrl.query);
    const name = parsedQuery.name;
    const comment = parsedQuery.comment;

    fs.readFile('comments.txt', 'utf8', (err, data) => {
      const comments = JSON.parse(data);
      comments.push({ name, comment });

      fs.writeFile('comments.txt', JSON.stringify(comments), () => {
        res.writeHead(302, { Location: '/' });
        res.end();
      });
    });
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000, () => {
  console.log('server running');
});
