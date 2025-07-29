import React, { useState } from 'react';
import NewsForm from './components/NewsForm';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleResult = async (data) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setResult(json);
    } catch (error) {
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

return (
    <div className="App">
      <div className="app-header">
        <h1 className="app-title">AI News Analyzer</h1>
        <p className="app-subtitle">
          Summarize articles and analyze sentiment with AI-powered precision
        </p>
      </div>
      
      <NewsForm setResult={setResult} setLoading={setLoading} />
      <ResultDisplay result={result} loading={loading} />
      
      <div className="floating-shapes">
        <div className="shape circle-blue"></div>
        <div className="shape circle-teal"></div>
        <div className="shape blob"></div>
      </div>
    </div>
  );
}

export default App;
