import express, {NextFunction, Request, Response} from 'express';

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

app.get('/api/tags', (req, res, next) => {
  const tags = [
    {name: 'Java'},
    {name: 'Kotlin'},
    {name: 'Typescript'}
  ]

  return res.json({
    tags: tags
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
