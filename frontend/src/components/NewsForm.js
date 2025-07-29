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
      alert('Something went wrong! Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <div className="input-toggle">
        <input
          type="radio"
          id="textType"
          name="inputType"
          value="text"
          checked={inputType === 'text'}
          onChange={() => setInputType('text')}
        />
        <label htmlFor="textType">Text Input</label>
        <input
          type="radio"
          id="urlType"
          name="inputType"
          value="url"
          checked={inputType === 'url'}
          onChange={() => setInputType('url')}
        />
        <label htmlFor="urlType">Article URL</label>
      </div>

      {inputType === 'text' ? (
        <textarea
          rows="8"
          placeholder="Paste news article text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      ) : (
        <input
          type="url"
          placeholder="Paste article URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      )}

      <button type="submit">
        <span className="button-text">Analyze Content</span>
        <span className="button-icon">→</span>
      </button>
    </form>
  );
}

export default NewsForm;