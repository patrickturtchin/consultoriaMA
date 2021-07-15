const express = require('express');
const app = express();
const userRoute = require('./rotas');

const users = [];

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.use(
  '/user',
  (_req, _res, next) => {
    console.log('olaaaaa');
    next();
  },
  userRoute
);

const port = 5001;

app.listen(port, () => {
  console.log(`Estamos escutando a porta ${port} do MAQUINA do TUZAO`);
});
