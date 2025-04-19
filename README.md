# 🧠 AI News Summarizer & Sentiment Analyzer

A web-based application that summarizes news articles and analyzes their sentiment (Positive, Negative, or Neutral) using state-of-the-art NLP models.

---

## 🚀 Features

- 📝 **Text Summarization** using HuggingFace Transformers (BART/T5)
- 😄 **Sentiment Analysis** using VADER Sentiment Analyzer
- 🌐 Accepts both **text input** and **article URLs**
- 📱 Fully **responsive** UI built with **React.js**
- 🔁 Real-time analysis with Flask-based API

---

## 🖥️ Tech Stack

| Frontend        | Backend       | NLP & ML Models         |
|-----------------|---------------|--------------------------|
| React.js        | Flask (Python) | HuggingFace Transformers |
| CSS             | Flask-CORS     | VADER Sentiment Analyzer |


## 📂 Project Structure

```bash
ai-news-summarizer/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NewsForm.js
│   │   │   ├── ResultDisplay.js
│   │   │   ├── NewsForm.css
│   │   │   └── ResultDisplay.css
│   │   └── App.js
│   └── package.json
└── README.md
```

---

## 📥 Installation & Setup

### 🔧 Backend (Flask + NLP)

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Make sure `Flask` runs on `http://127.0.0.1:5000`.

---

### 🌐 Frontend (React.js)

```bash
cd frontend
npm install
npm start
```

App will run on `http://localhost:3000`.

---

## 🧪 Usage

1. Choose between `Text` or `URL`.
2. Paste the content or article link.
3. Click `Analyze`.
4. The app will return:
   - 🔹 A summarized version of the article
   - 🔹 A sentiment label (Positive / Negative / Neutral)

---

## 🧠 How it Works

### 🔹 Summarization:
Uses **HuggingFace Transformers** (like BART or T5) to condense large articles into short summaries by extracting key points.

### 🔹 Sentiment Analysis:
Implements **VADER (Valence Aware Dictionary and sEntiment Reasoner)** to detect polarity in the article’s tone.

---

## 💡 Use Cases

- 📚 Skim lengthy news articles
- 🧠 Understand emotional tone in news
- 🕒 Save time while staying informed
- 🗞️ News summarization for media analysts

---

## 🛠️ Future Improvements

- 🌍 Multi-language support
- 🎚️ Adjustable summary length
- 🔊 Text-to-speech for summaries
- 🧠 Advanced sentiment detection

---

## 🤝 Contributing

Pull requests are welcome! If you have ideas for improvements or bug fixes, feel free to open an issue or PR.

---

## 📃 License

MIT License © 2025 [MohitBytes]
