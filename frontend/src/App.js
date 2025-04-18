import React, { useState } from 'react';
import NewsForm from './components/NewsForm';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ New loading state

  return (
    <div className="App">
      <h1>🧠 AI News Summarizer & Sentiment Analyzer</h1>
      <NewsForm setResult={setResult} setLoading={setLoading} />
      <ResultDisplay result={result} loading={loading} />
    </div>
  );
}

export default App;
