const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');

require('./database-connection');
const app = express();
app.use(bodyparser.json());
app.use(cookieparser());
app.set('view engine', 'pug');

const note = require('./routes/note');
app.use('/note', note);

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3030, () => {
  console.log('Server Listening');
});
