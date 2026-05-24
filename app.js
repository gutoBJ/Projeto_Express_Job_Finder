const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path')
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars
app.set('view', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
db.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  

// routes
app.get('/', (req, res) => {
  res.send('Está funcionando!');
});

// job routes
app.use('/jobs', require('./routes/jobs'))