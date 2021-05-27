const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./public/db.json');
const db = low(adapter);

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/', (req, res) => {
  res.send('Бекенд работает');
});

server.post('/add-pizza', (req, res) => {
  db.get('pizzas').push(req.body).write();
  res.jsonp(req.body);
});

server.get('/pizzas', (req, res) => {
  const pizzas = db.get('pizzas');
  res.jsonp(pizzas);
});

server.use(router);
// Use default router
server.listen(5000, () => {
  console.log('Backend Server is running');
});