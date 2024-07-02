const axios = require("axios");
const { XY_FINANCE_API_URL } = require("../constants/apiConstants");

const fetchTokens = async () => {
  const response = await axios.get(`${XY_FINANCE_API_URL}/tokens`);
  return response.data;
};

module.exports = {
  fetchTokens,
};
