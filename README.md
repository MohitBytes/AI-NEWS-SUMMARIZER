# 🧠 AI News Summarizer & Sentiment Analyzer

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.3.2-green.svg)
![HuggingFace](https://img.shields.io/badge/🤗-Transformers-yellow.svg)

A web-based application that summarizes news articles and analyzes their sentiment (Positive, Negative, or Neutral) using state-of-the-art NLP models. Built with React.js frontend and Flask backend, powered by HuggingFace Transformers.

## 📋 Table of Contents

- [📺 Demo](#-demo)
- [🚀 Features](#-features)
- [🖥️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [📥 Installation & Setup](#-installation--setup)
- [🧪 Usage](#-usage)
- [🧠 How it Works](#-how-it-works)
- [💡 Use Cases](#-use-cases)
- [🔧 Troubleshooting](#-troubleshooting)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [🛠️ Future Improvements](#️-future-improvements)
- [📃 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Contact & Support](#-contact--support)

## 📺 Demo

> **Note**: The application features a modern, responsive UI with real-time NLP analysis capabilities.

### 🖼️ Preview

```
🏠 AI News Analyzer
┌─────────────────────────────────────────┐
│ ◯ Text Input    ⭘ Article URL          │
├─────────────────────────────────────────┤
│ 📝 Paste news article text here...     │
│                                         │
│                                         │
│                                         │
└─────────────────────────────────────────┘
          [ 🚀 Analyze Content → ]

📊 Results:
┌─────────────────────────────────────────┐
│ 📄 Summary: Article discusses...        │
│ 😊 Sentiment: POSITIVE                  │
└─────────────────────────────────────────┘
```

### ✨ Key Features Demo
- 🎨 **Modern UI**: Gradient backgrounds with floating animations
- ⚡ **Real-time**: Instant analysis with loading states
- 📱 **Responsive**: Works seamlessly on desktop and mobile
- 🔄 **Dual Mode**: Support for both text input and URL processing

---

## 🚀 Features

- 📝 **Text Summarization** using HuggingFace Transformers (DistilBART CNN-12-6)
- 😄 **Sentiment Analysis** using DistilBERT (SST-2 fine-tuned)
- 🌐 Accepts both **text input** and **article URLs**
- 📱 Fully **responsive** UI built with **React.js**
- 🔁 Real-time analysis with Flask-based API
- 🎨 Modern gradient UI with floating animations
- ⚡ Fast processing with optimized model loading

---

## 🖥️ Tech Stack

| Category        | Frontend         | Backend           | NLP & ML Models              |
|-----------------|------------------|-------------------|------------------------------|
| **Framework**   | React.js 18.2.0  | Flask 2.3.2       | HuggingFace Transformers     |
| **Styling**     | CSS3 + Gradients | Flask-CORS        | DistilBART (Summarization)   |
| **HTTP Client** | Axios            | Python 3.8+       | DistilBERT (Sentiment)       |
| **Build Tool**  | React Scripts    | Newspaper3k       | PyTorch                      |
| **Container**   | Docker + Nginx   | -                 | -                            |


## 📂 Project Structure

```bash
AI-NEWS-SUMMARIZER/
├── 📁 backend/
│   ├── 🐍 app.py                    # Flask API server
│   ├── 🔍 summarizer.py             # Text summarization logic
│   ├── 😊 sentiment_analyzer.py     # Sentiment analysis logic
│   └── 📋 requirements.txt          # Python dependencies
├── 📁 frontend/
│   ├── 📁 public/                   # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📝 NewsForm.js       # Input form component
│   │   │   ├── 📊 ResultDisplay.js  # Results display component
│   │   │   ├── 🎨 NewsForm.css      # Form styling
│   │   │   └── 🎨 ResultDisplay.css # Results styling
│   │   ├── 🚀 App.js                # Main React component
│   │   ├── 🎨 App.css               # App styling
│   │   ├── 🎨 index.css             # Global styles
│   │   └── 🏠 index.js              # React entry point
│   ├── 📋 package.json              # Node.js dependencies
│   └── 📁 build/                    # Built React app
├── 🐳 Dockerfile                    # Docker configuration
├── 📋 package.json                  # Root package.json
└── 📖 README.md                     # This file
```

---

## 📥 Installation & Setup

### 📋 Prerequisites

- **Python** 3.8 or higher
- **Node.js** 16.0 or higher
- **npm** or **yarn**
- **Git**

### 🚀 Quick Start

#### Option 1: Root Scripts (Recommended)

```bash
# Clone the repository
git clone https://github.com/MohitBytes/AI-NEWS-SUMMARIZER.git
cd AI-NEWS-SUMMARIZER

# Install all dependencies (backend + frontend)
npm run install-all

# Start backend (Terminal 1)
npm run start-backend

# Start frontend (Terminal 2)  
npm run start-frontend
```

#### Option 2: Docker (Production)

```bash
# Clone the repository
git clone https://github.com/MohitBytes/AI-NEWS-SUMMARIZER.git
cd AI-NEWS-SUMMARIZER

# Build and run with Docker
npm run docker-build
npm run docker-run
```

The application will be available at `http://localhost:80`

#### Option 3: Manual Setup

### 🔧 Backend (Flask + NLP)

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the Flask server
python app.py
```

**Backend runs on:** `http://127.0.0.1:5000`

---

### 🌐 Frontend (React.js)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

**Frontend runs on:** `http://localhost:3000`

---

## 🧪 Usage

### Step-by-Step Guide

1. **Choose Input Method**: Select between `Text` or `URL` input
2. **Enter Content**: 
   - **Text**: Paste news article content directly
   - **URL**: Enter a valid article URL (e.g., CNN, BBC, Reuters)
3. **Analyze**: Click the `Analyze Content` button
4. **View Results**: The app will display:
   - 📄 **Summary**: Condensed version (50-150 words)
   - 😊 **Sentiment**: Positive/Negative classification with confidence

### API Endpoint

The backend exposes a REST API endpoint:

```bash
POST /analyze
Content-Type: application/json

# For text input
{
  "text": "Your news article text here..."
}

# For URL input
{
  "url": "https://example.com/news-article"
}
```

**Response:**
```json
{
  "summary": "Generated summary text...",
  "sentiment": "POSITIVE" | "NEGATIVE"
}
```

---

## 🧠 How it Works

### 🔹 Summarization:
Uses **HuggingFace Transformers** (like BART or T5) to condense large articles into short summaries by extracting key points.

### 🔹 Sentiment Analysis:
Implements **VADER (Valence Aware Dictionary and sEntiment Reasoner)** to detect polarity in the article’s tone.
### 🤖 AI Models & Performance

#### 📝 Text Summarization
- **Model**: `sshleifer/distilbart-cnn-12-6` (DistilBART)
- **Task**: Extractive and abstractive summarization
- **Output**: 50-150 words (configurable)
- **Processing**: Handles articles up to 1300 characters efficiently

#### 😊 Sentiment Analysis  
- **Model**: `distilbert-base-uncased-finetuned-sst-2-english` (DistilBERT)
- **Task**: Binary sentiment classification
- **Output**: POSITIVE or NEGATIVE with confidence scores
- **Processing**: First 512 tokens for optimal performance

### ⚙️ Technical Architecture

```
User Input → Input Processing → HuggingFace Pipeline → AI Models → JSON Response → React UI
     ↓              ↓                    ↓                ↓             ↓           ↓
  Text/URL → Article Extraction → Model Loading → Summarization → API Response → Display
                ↓                       ↓            ↓
          newspaper3k           DistilBART     DistilBERT
                              (Summary)     (Sentiment)
```

---

## 💡 Use Cases

- 📚 Skim lengthy news articles
- 🧠 Understand emotional tone in news
- 🕒 Save time while staying informed
- 🗞️ News summarization for media analysts

---

## 🔧 Troubleshooting

### Common Issues

#### Backend Issues
- **Import Error**: Make sure all dependencies are installed with `pip install -r requirements.txt`
- **Model Loading Error**: First run may take time to download models (~500MB)
- **Port 5000 in use**: Change port in `app.py` or kill existing process

#### Frontend Issues
- **CORS Error**: Ensure backend is running on `http://127.0.0.1:5000`
- **Build Issues**: Clear `node_modules` and reinstall with `npm ci`
- **Port 3000 in use**: Use `npm start -- --port 3001` for different port

#### Performance
- **Slow Analysis**: Large articles (>1000 words) may take 10-30 seconds
- **Memory Usage**: Models require ~2GB RAM for optimal performance

---

## 🚀 Deployment

### Production Setup

#### Using Docker
```bash
# Build production image
docker build -t ai-news-analyzer .

# Run with custom port
docker run -p 8080:80 ai-news-analyzer
```

#### Manual Deployment
```bash
# Build React app
cd frontend && npm run build

# Serve with static server (e.g., nginx, serve)
npx serve -s build -l 3000

# Run backend with production settings
cd backend && python app.py
```

### Environment Variables
```bash
# Backend
export FLASK_ENV=production
export PORT=5000

# Optional: HuggingFace cache directory
export HF_HOME=/path/to/models
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes and test thoroughly
4. **Commit** your changes: `git commit -m 'Add amazing feature'`
5. **Push** to the branch: `git push origin feature/amazing-feature`
6. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and formatting
- Add tests for new features
- Update documentation as needed
- Test with various article sources

---

## 🛠️ Future Improvements

- 🌍 Multi-language support
- 🎚️ Adjustable summary length
- 🔊 Text-to-speech for summaries
- 🧠 Advanced sentiment detection (emotion classification)
- 📊 Sentiment confidence scores display
- 🔍 Keyword extraction and highlighting
- 📱 Mobile app development
- 🌐 Support for more news sources
- ⚡ Real-time analysis streaming
- 📈 Analytics dashboard

---

## 📃 License

MIT License © 2025 [MohitBytes](https://github.com/MohitBytes)

---

## 🙏 Acknowledgments

- **HuggingFace** for providing state-of-the-art NLP models
- **React Team** for the amazing frontend framework  
- **Flask Community** for the lightweight backend framework
- **newspaper3k** for reliable article extraction

---

## 📞 Contact & Support

- **GitHub**: [@MohitBytes](https://github.com/MohitBytes)
- **Issues**: [GitHub Issues](https://github.com/MohitBytes/AI-NEWS-SUMMARIZER/issues)
- **Discussions**: [GitHub Discussions](https://github.com/MohitBytes/AI-NEWS-SUMMARIZER/discussions)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [MohitBytes](https://github.com/MohitBytes)

</div>
