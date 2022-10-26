const HistoryService = require('../services/history.service');

const getHistory = async (req, res, next) => {
  try {
    const history = await HistoryService.getHistory();
    res.json(history);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getHistory,
};