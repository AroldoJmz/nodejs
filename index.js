const http = require('http');
const PORT = 3000;

const value = "Prueba de API";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(value);
});



server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
