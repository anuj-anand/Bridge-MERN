

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TokenList = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tokens'); 
        setTokens(response.data.tokens);
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div>
      <h2>Tokens</h2>
      <ul>
        {tokens.map(token => (
          <li key={token}>{token}</li>
        ))}
      </ul>
    </div>
  );
};

export default TokenList;
