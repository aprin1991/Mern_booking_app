import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
mongoose
  .connect(
    (process.env.MONGODB_CONNECTION_STRING as string).replace(
      '<password>',
      process.env.DB_PASSOWRD as string
    )
  )
  .then(() => {
    console.log('DB connected');
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'OK',
  });
});

app.listen(7000, () => {
  console.log('app running');
});
