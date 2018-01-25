const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const register = require('./services/user-service');

require('./database-connection');

const app = express();
app.use(bodyparser.json());
app.use(cookieparser());
app.set('view engine', 'pug');
app.use(cors());

const note = require('./routes/note');

app.use('/note', note);

const user = require('./routes/user');

app.use('/user', user);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  register.add({email, password});
  res.send({
    message: `Hello ${email}`,
  });
});
module.exports = app;
