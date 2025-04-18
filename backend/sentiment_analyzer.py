from transformers import pipeline

sentiment_pipeline = pipeline("sentiment-analysis", model="distilbert/distilbert-base-uncased-finetuned-sst-2-english")

def analyze_sentiment(text):
    result = sentiment_pipeline(text[:512])[0]  # first 512 characters
    return result['label']
