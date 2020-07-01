import * as express from 'express';
import { data } from '@my-amazon/api-interfaces';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
