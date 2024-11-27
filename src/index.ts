import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', (_req: Request, res: Response) => {
  res.send('Express Typescript on Vercel');
});

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});