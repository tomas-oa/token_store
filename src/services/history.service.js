const { 
  getHistoryDB,
} = require('../db/history.db');

class HistoryServices {
  getHistory = async () => {
    try {
      return await getHistoryDB();
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new HistoryServices();
