// src/App.js
import React from 'react';
import TokenList from './components/TokenList';
import QuoteForm from './components/QuoteForm';
import './styles.css';
function App() {
  return (
    <div>
      <h1>Bridge App</h1>
      <TokenList />
      <QuoteForm />
      {/* Add more components as needed */}
    </div>
  );
}

export default App;
