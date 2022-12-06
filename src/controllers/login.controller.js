const loginServices = require('../services/login.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginServices.login(email, password);

  try {
    if (user < 1) {
      return res.status(400).json({ message: 'Bad request' });
    }
  } catch (error) {
    console.error(error);
  }

  return res.json(user);
};

module.exports = {
  login,
};
