const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.json({
    userName: 'Sany',
    category: 'Balada',
  });
});

app.listen(5000, () => {
  console.log(`Estamos escutando a porta 5000 do pc do TUZAO`);
});
