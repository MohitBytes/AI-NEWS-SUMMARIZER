import React, { useState } from 'react';
import axios from 'axios';
import './NewsForm.css';

function NewsForm({ setResult, setLoading }) {
  const [inputType, setInputType] = useState('text');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = inputType === 'text' ? { text } : { url };

    try {
      setLoading(true);
      setResult(null);
      const res = await axios.post('http://127.0.0.1:5000/analyze', payload);
      setResult(res.data);
    } catch (error) {
      alert('Something went wrong!');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <div className="input-toggle">
        <label>
          <input
            type="radio"
            value="text"
            checked={inputType === 'text'}
            onChange={() => setInputType('text')}
          />
          Text
        </label>
        <label>
          <input
            type="radio"
            value="url"
            checked={inputType === 'url'}
            onChange={() => setInputType('url')}
          />
          URL
        </label>
      </div>

      {inputType === 'text' ? (
        <textarea
          rows="8"
          placeholder="Paste news article text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      ) : (
        <input
          type="url"
          placeholder="Paste article URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      )}

      <button type="submit">Analyze</button>
    </form>
  );
}

export default NewsForm;
