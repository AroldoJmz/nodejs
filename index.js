const http = require('http');
const PORT = 3000;

const values = [
  'HGV-1562',
  'SPA-9331',
  'ALT-4597',
  'SSS-3898',
  'IMS-8080',
  'PNG-1234' 
]
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(values);
});



server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
