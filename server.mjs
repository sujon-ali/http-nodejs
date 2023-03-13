import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello My World!');
  res.end();
}).listen(process.env.PORT);
