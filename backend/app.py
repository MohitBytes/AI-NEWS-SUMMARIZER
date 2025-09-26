import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from summarizer import summarize_text
from sentiment_analyzer import analyze_sentiment
from newspaper import Article

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = ""

    # If URL is provided
    if 'url' in data and data['url']:
        article = Article(data['url'])
        article.download()
        article.parse()
        text = article.text
    else:
        text = data.get('text', '')

    summary = summarize_text(text)
    sentiment = analyze_sentiment(text)

    return jsonify({
        'summary': summary,
        'sentiment': sentiment
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
