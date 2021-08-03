const { Router } = require('express');

const route = Router();

const users = [];

route.post('/create', (request, response) => {
  const { id, name, lastName, age } = request.body;
  const User = { id, name, lastName, age, createdAt: new Date() };

  users.push(User);

  return response.json(User);
});

route.get('/read/:id', (request, response) => {
  const { id } = request.params;

  const _id = parseInt(id);

  const userFound = users.find((item) => {
    console.log(item);
    return item.id === _id;
  });

  return response.json(userFound);
});

module.exports = route;
