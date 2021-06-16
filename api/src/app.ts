import express from 'express';
import {db} from "./data/database";

const app = express();

app.use('/', (req, res, next) => {
  return res.send('<h1>Hello world</h1>');
});

db.sync()
  .then(() => {
    console.log(`zavanton - connected to DB!`);
    app.listen(5000);
  })
  .catch(err => {
    console.log(`zavanton - err: ${err}`);
  });
