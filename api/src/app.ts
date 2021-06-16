import express from 'express';

const app = express();

app.use('/', (req, res, next) => {
  return res.send('<h1>Hello world</h1>');
});

app.listen(5000);
