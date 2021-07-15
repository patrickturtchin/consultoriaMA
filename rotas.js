const { Router } = require('express');

const route = Router();

route.get('/patrick', (request, response) => {
  return response.sendFile(__dirname + '/patrick.html');
});

route.get('/sany', (request, response) => {
  return response.sendFile(__dirname + '/sany.html');
});

module.exports = route;
