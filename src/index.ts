import express from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lkjhgf'] }));
app.use(router);

app.listen(5005, () => {
  console.log(`Express and Nodejs running on port 5005`);
});
