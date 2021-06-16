import express from 'express';
import {db} from "./data/database";

const app = express();

app.get('/api/tags', (req, res, next) => {
  return res.json({
    tags: []
  });
});

app.listen(5000);

// db.sync()
//   .then(() => {
//     console.log(`zavanton - connected to DB!`);
//     app.listen(5000);
//   })
//   .catch(err => {
//     console.log(`zavanton - err: ${err}`);
//   });
