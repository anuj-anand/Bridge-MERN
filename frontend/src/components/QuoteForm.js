
import React, { useState } from "react";
import axios from "axios";

const QuoteForm = () => {
  const [token, setToken] = useState("");
  const [chain, setChain] = useState("");
  const [quote, setQuote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/tokens", { token, chain }); // Replace with actual endpoint
      setQuote(response.data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div>
      <h2>Get Quote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <input
          type="text"
          placeholder="Chain"
          value={chain}
          onChange={(e) => setChain(e.target.value)}
        />
        <button type="submit">Get Quote</button>
      </form>
      {quote && <p>Quote: {quote}</p>}
    </div>
  );
};

export default QuoteForm;
