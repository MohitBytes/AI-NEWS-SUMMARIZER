import React from 'react';
import './ResultDisplay.css';

function ResultDisplay({ result, loading }) {
  if (loading) {
    return (
      <div className="result-card loading">
        <div className="loader"></div>
        <p>Analyzing... Please wait</p>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="result-card">
      <h2>📝 Summary</h2>
      <p className="summary-text">{result.summary}</p>

      <h2>💬 Sentiment</h2>
      <p className={`sentiment-label ${result.sentiment.toLowerCase()}`}>
        {result.sentiment}
      </p>
    </div>
  );
}

export default ResultDisplay;
