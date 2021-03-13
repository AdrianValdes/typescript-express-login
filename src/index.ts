import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';

const app = express();

app.use(router);

app.listen(5005, () => {
  console.log(`Express and Nodejs running on port 5005`);
});
