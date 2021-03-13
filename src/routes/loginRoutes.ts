import { Request, Router, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(
    `<div>
      <h1>Hi from express on port 5005</h1>
    </div>`
  );
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email" autocomplete="off"/>
        </div>
        <div> 
            <label>Password</label>
            <input name="password" type="password" />
        </div>
        <button> Submit </button>
    </form>
  `);
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(email + password);
});

export { router };
