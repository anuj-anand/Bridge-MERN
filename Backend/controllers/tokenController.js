const { fetchTokens } = require("../services/tokenService");

const getTokens = async (req, res) => {
  try {
    const tokens = await fetchTokens();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTokens,
};
