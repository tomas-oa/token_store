const TokensService = require("../services/tokens.service");

const getAllTokens = async(req, res, next) => {
  try {
    const tokens = await TokensService.getAllTokens();
    res.json(tokens);
  } catch (error) {
    console.error(error);
  }
}

const updatePrice = async(req, res, next) => {
  try {
    const { price } = req.body;
    const { id } = req.params;

    const token = await TokensService.updatePrice(price, id);

    res.json(token);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllTokens,
  updatePrice,
}
