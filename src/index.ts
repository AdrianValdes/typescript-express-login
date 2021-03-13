import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
    <h1>Hi from express on port 5005</h1>
    </div>
    `);
});

app.listen(5005, () => {
  console.log(`Express and Nodejs running on port 5005`);
});
