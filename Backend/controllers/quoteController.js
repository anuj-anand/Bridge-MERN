const { fetchQuote } = require("../services/quoteService");

const getQuotes = async (req, res) => {
  try {
    const { token, chain } = req.body;
    const quote = await fetchQuote(token, chain);
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postQuotes = async (req, res) => {
  try {
    const { token, chain } = req.body;
    const quote = await fetchQuote(token, chain);
    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getQuotes,
  postQuotes,   
};
