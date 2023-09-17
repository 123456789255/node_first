const db = require('./db');

function registerUser(username, password) {
  return db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
}

module.exports = { registerUser };
