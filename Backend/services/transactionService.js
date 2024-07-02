const axios = require("axios");
const { XY_FINANCE_API_URL } = require("../constants/apiConstants");

const createTransactionParams = async (quote) => {
  const response = await axios.post(`${XY_FINANCE_API_URL}/params`, { quote });
  return response.data;
};

module.exports = {
  createTransactionParams,
};

