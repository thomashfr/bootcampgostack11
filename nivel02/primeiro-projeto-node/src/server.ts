import express from 'express';
import routes from './routes';

const app = express();

app.listen(3333, () => {
  console.log('Servidor Rodando na Porta 3333');
});
