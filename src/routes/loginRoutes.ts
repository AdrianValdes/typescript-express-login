import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(
    `<div>
      <h1>Hi from express on port 5005</h1>
    </div>`
  );
});

export { router };
