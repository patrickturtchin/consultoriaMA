const express = require('express');
const app = express();
const userRoute = require('./userRoutes');

app.use(express.json());
app.use('/user', userRoute);

const port = 5001;

app.listen(port, () => {
  console.log(`Estamos escutando a porta ${port} do MAQUINA do TUZAO`);
});
