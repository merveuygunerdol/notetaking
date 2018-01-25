const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');

require('./database-connection');
const app = express();
app.use(bodyparser.json());
app.use(cookieparser());
app.set('view engine', 'pug');
app.use(cors());

const note = require('./routes/note');
app.use('/note', note);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  res.send({
    message: `Hello ${email}`,
  });
});
module.exports = app;
