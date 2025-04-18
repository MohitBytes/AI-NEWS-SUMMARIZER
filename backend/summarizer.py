from transformers import pipeline

summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

def summarize_text(text):
    max_length = 1300
    text = text.strip().replace("\n", " ")
    return summarizer(text, max_length=150, min_length=50, do_sample=False)[0]['summary_text']
