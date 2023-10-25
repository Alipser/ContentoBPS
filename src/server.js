import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Lee el contenido del archivo HTML
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});