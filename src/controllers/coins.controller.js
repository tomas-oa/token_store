const CoinsService = require('../services/coins.service');

const getUserCoins = async (req, res) => {
  try {
    const { id } = req.params;
    const coins = await CoinsService.getUserCoins(id);

    if (coins.length > 0) {
      res.json(coins);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
  }
};

const getAllCoins = async (req, res) => {
  try {
    const coins = await CoinsService.getAllCoins();

    if (coins.length > 0) {
      res.json(coins);
    } else {
      res.status(404).json({ message: 'No coins found' });
    }
  } catch (error) {
    console.error(error);
  }
};

const getTopCoins = async (req, res) => {
  try {
    const coins = await CoinsService.getTopCoins();

    if (coins.length > 0) {
      res.json(coins);
    } else {
      res.status(404).json({ message: 'No coins found' });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUserCoins,
  getAllCoins,
  getTopCoins,
};
