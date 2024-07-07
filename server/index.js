import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import { trusted } from 'mongoose';

const app = express();
// app.use(cors());
app.use(cors({
    origin: '*',
  }));
  

  // yes i have made these chanages
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);
const PORT = 5001;
app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));
Connection();








