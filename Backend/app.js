const express = require("express");
const app = express();
const tokenRoutes = require("./routes/tokenRoutes");
const quoteRoutes = require("./routes/quoteRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const cors = require("cors");
// Middleware to parse JSON bodies
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
// Route handlers
app.use("/tokens", tokenRoutes);
app.use("/quotes", quoteRoutes);
app.use("/params", transactionRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Bridge API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
