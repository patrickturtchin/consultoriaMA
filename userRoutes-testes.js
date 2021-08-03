// const { Router } = require('express');

// const route = Router();

// route.get('/patrick', (request, response) => {
//   return response.sendFile(__dirname + '/patrick.html');
// });

// route.get('/sany', (request, response) => {
//   return response.sendFile(__dirname + '/sany.html');
// });

// // const Router = {
// //   get: (name, callback) => {
// //     consolelog(name)

// //     callback({ params, body }, { sendFile: () => {} })
// //   }
// // }

// route.get('/console', (request, response) => {
//   const { params } = request;

//   console.log(module);
//   console.log(__dirname);
//   console.log(__filename);

//   return response.sendFile(__dirname + '/sany.html');
// });

// const rotasGlobais = {
//   rotas: [],
//   get: function (nome, callback) {
//     const genericGet = {
//       nome,
//       params: 'olá',
//       numeroAleatorio: Math.random() * 100,
//     };

//     this.rotas.push(genericGet);

//     callback(genericGet);
//   },
// };

// rotasGlobais.get('/user/read', ({ nome, params, numeroAleatorio }) => {
//   console.log(`localhost:555${nome}/${params}/${numeroAleatorio}`);
// });

// rotasGlobais.get('/user/create', ({ rota }) => {});

// rotasGlobais.get('/user/delete', ({ rota }) => {});

// console.log(rotasGlobais.rotas);

// module.exports = { nome: 'patrick', route };
