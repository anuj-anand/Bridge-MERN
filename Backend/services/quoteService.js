const axios = require("axios");
const { XY_FINANCE_API_URL } = require("../constants/apiConstants");

const fetchQuote = async (token, chain) => {
  const response = await axios.post(`${XY_FINANCE_API_URL}/quotes`, {
    token,
    chain,
  });
  return response.data;
};

module.exports = {
  fetchQuote,
};
