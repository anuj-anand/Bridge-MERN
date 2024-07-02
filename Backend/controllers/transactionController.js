const { createTransactionParams } = require("../services/transactionService");

const createTransaction = async (req, res) => {
  const { quote } = req.body;
  try {
    const transactionParams = await createTransactionParams(quote);
    res.status(200).json(transactionParams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTransaction,
};
