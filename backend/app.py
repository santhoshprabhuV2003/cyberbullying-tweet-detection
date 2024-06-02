import os
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

import nltk
nltk.download('wordnet')
nltk.download('stopwords')

from flask import Flask, request, jsonify
from routes.predict import predict_tweet

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    tweet_text = data.get('text')
    prediction = predict_tweet(tweet_text)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)