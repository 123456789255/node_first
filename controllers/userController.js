const userModel = require('../models/userModel');

function register(req, res) {
  const { username, password } = req.body;

  userModel.registerUser(username, password)
    .then(() => res.send('User registered successfully!'))
    .catch(err => res.status(500).send(`Error: ${err.message}`));
}

module.exports = { register };
