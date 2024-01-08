const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.get('/booking', (_, res) => {
  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { booking = [] } = db;

    return res.json(booking);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.use(router);

server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
