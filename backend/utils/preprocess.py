import re
import demoji
import string
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Ensure to download the necessary NLTK data during initial setup
def cleantext(text):
    # Removal of hashtags, mentions, urls, and retweets
    pattern = re.compile(r"(#[A-Za-z0-9]+|@[A-Za-z0-9]+|https?://\\S+|www\\.\\S+|\\S+\\.[a-z]+|RT @)")
    text = pattern.sub('', text)

    # Removal of multiple spaces between words and rejoining using single space
    text = " ".join(text.split())

    # Lemmatize each word in the tweet
    lemmatizer = WordNetLemmatizer()
    text = " ".join([lemmatizer.lemmatize(word) for word in text.split()])

    # Removal of stopwords
    stop_words = set(stopwords.words('english'))
    text = " ".join([word for word in text.split() if word.lower() not in stop_words])

    # Removal of punctuation
    text = text.translate(str.maketrans('', '', string.punctuation))

    # Converting emojis to text
    text = demoji.replace(text)

    return text