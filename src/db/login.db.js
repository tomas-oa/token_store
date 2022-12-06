const bcrypt = require('bcryptjs');
const pool = require('../db');

const loginDB = async (email, password) => {
  const { rows: user } = await pool.query(
    'SELECT u.id, u.name, u.email, c.amount, u.password FROM users u JOIN coins c ON u.id = c.user_id WHERE u.email = $1',
    [email],
  );

  if (!user[0]) {
    return { error: 'User not found' };
  }

  const passwordMatch = await bcrypt.compare(password, user[0].password);

  if (!passwordMatch) {
    return { error: 'Incorrect password' };
  }

  return user;
};

module.exports = { loginDB };
