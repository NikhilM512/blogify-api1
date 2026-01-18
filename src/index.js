// index.js
const http = require('http');

// Define the port
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Always set Content-Type
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200);
      res.end('Welcome to the homepage!');
    } else if (req.url === '/api/data') {
      res.writeHead(200);
      res.end("Here's your API data.");
    } else {
      res.writeHead(404);
      res.end('404 - Not Found');
    }
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export for testing
module.exports = server;
