import express, {NextFunction, Request, Response} from 'express';
import {db} from "./data/database";
import {Tag} from "./models/tags";

const app = express();

// CORS headers
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/tags', async (req, res, next) => {
  // TODO - zavanton: this is just for mocking
  const item = await Tag.create({name: "Python"});

  const tags = await Tag.findAll()

  return res.json({
    tags: tags
  });
});

setTimeout(function() {
  db.sync()
    .then(() => {
      console.log(`zavanton - connected to DB!`);
      app.listen(5000);
    })
    .catch(err => {
      console.log(`zavanton - err: ${err}`);
      console.log(`zavanton - ERROR:`);
      console.log(err);
      app.listen(5000);
    });
}, 5000);
