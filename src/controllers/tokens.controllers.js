const TokensService = require('../services/tokens.service');

const getAllTokens = async (req, res) => {
  try {
    const tokens = await TokensService.getAllTokens();
    res.json(tokens);
  } catch (error) {
    console.error(error);
  }
};

const updateTokenPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    const token = await TokensService.updateTokenPrice(price, id);

    if (token.length === 0) {
      res.status(404).json({ message: 'Token not found' });
    }

    res.json(token);
  } catch (error) {
    console.error(error);
  }
};

const getToken = async (req, res) => {
  try {
    const { id } = req.params;

    const token = await TokensService.getToken(id);

    if (token.length === 0) {
      res.status(404).json({ message: 'Token not found' });
    }

    res.json(token);
  } catch (error) {
    console.error(error);
  }
};

const createToken = async (req, res) => {
  try {
    const {
      name, url, price, state, ownerId,
    } = req.body;

    const token = await TokensService.createToken({
      name, url, price, state, ownerId,
    });

    res.json(token);
  } catch (error) {
    console.error(error);
  }
};

const deleteToken = async (req, res) => {
  try {
    const { id } = req.params;

    const token = await TokensService.deleteToken(id);

    if (token.length === 0) {
      res.status(404).json({ message: 'Token not found' });
    }

    res.json(token);
  } catch (error) {
    console.error(error);
  }
};

const getUserTokens = async (req, res) => {
  try {
    const { id } = req.params;

    const tokens = await TokensService.getUserTokens(id);

    if (tokens.length === 0) {
      res.status(404).json({ message: 'Tokens not found' });
    }

    res.json(tokens);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllTokens,
  updateTokenPrice,
  getToken,
  createToken,
  deleteToken,
  getUserTokens,
};
