const TokensService = require('../services/tokens.service');

const getAllTokens = async(req, res, next) => {
  try {
    const tokens = await TokensService.getAllTokens();
    res.json(tokens);
  } catch (error) {
    console.error(error);
  }
};

const updateTokenPrice = async(req, res, next) => {
  try {
    const { id } = req.params;
    const { price } = req.body;

    const token = await TokensService.updateTokenPrice(price, id);

    res.json(token);
  } catch (error) {
    console.error(error);
  }
};

const getToken = async(req, res, next) => {
  try {
    const { id } = req.params;

    const token = await TokensService.getToken(id);
    
    res.json(token);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllTokens,
  updateTokenPrice,
  getToken,
};
