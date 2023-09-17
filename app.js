const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('register'); // Создайте шаблон register.ejs в папке views
});

app.post('/register', userController.register);

app.listen(80, () => {
  console.log('Server is running on http://localhost:80');
});