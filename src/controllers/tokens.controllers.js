const TokensService = require('../services/tokens.service');

const getAllTokens = async (req, res) => {
  try {
    const tokens = await TokensService.getAllTokens();
    return res.json(tokens);
  } catch (error) {
    console.error(error);
  }
};

const updateTokenPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, description, name, onsale } = req.body;

    const token = await TokensService.updateTokenPrice(price, description, name, onsale, id);

    if (token.length === 0) {
      return res.status(404).json({ message: 'Token not found' });
    }

    return res.json(token);
  } catch (error) {
    console.error(error);
  }
};

const getToken = async (req, res) => {
  try {
    const { id } = req.params;

    const token = await TokensService.getToken(id);

    if (token.length === 0) {
       return res.status(404).json({ message: 'Token not found' });
    }

     return res.json(token);
  } catch (error) {
    console.error(error);
  }
};

const createToken = async (req, res) => {
  try {
    const {
      name, ownerId, url, price, onsale, description,
    } = req.body;

    const token = await TokensService.createToken({
      name, ownerId, url, price, onsale, description,
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
