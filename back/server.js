require('dotenv').config()

const express = require('express');
const app = express();
const connection = require('./db.js');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//creation routes
const projets = require('./routes/projets.js');
const etapes = require('./routes/etapes.js');

app.use('/projects' , projets);
app.use('/' , etapes);

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur Express');
});

