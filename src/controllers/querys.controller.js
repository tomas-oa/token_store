const QuerysServices = require('../services/querys.service');

const getMostFavoriteToken = async (req, res) => {
  const token = await QuerysServices.getMostFavoriteToken();
  try {
    if (token < 0) {
      return res.json({ error: 'No token found' });
    }
  } catch (error) {
    console.error(error);
  }

  return res.json(token);
};

const getUserWithMostCoins = async (req, res) => {
  const coins = await QuerysServices.getUserWithMostCoins();
  try {
    if (coins < 0) {
      return res.json({ error: 'No coins found' });
    }
  } catch (error) {
    console.error(error);
  }

  return res.json(coins);
};

const getMostSoldToken = async (req, res) => {
  const token = await QuerysServices.getMostSoldToken();
  try {
    if (token < 0) {
      return res.json({ error: 'No token found' });
    }
  } catch (error) {
    console.error(error);
  }

  return res.json(token);
};

const getUserWithMostTokens = async (req, res) => {
  const tokens = await QuerysServices.getUserWithMostTokens();
  try {
    if (tokens < 0) {
      return res.json({ error: 'No tokens found' });
    }
  } catch (error) {
    console.error(error);
  }

  return res.json(tokens);
};

module.exports = {
  getMostFavoriteToken,
  getUserWithMostCoins,
  getMostSoldToken,
  getUserWithMostTokens,
};
