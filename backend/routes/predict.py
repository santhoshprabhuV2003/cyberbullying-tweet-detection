import os
import sys
import pickle
from collections import Counter

# Get the project root directory
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.append(ROOT_DIR)

from utils.preprocess import cleantext

# Define the directory where the models are stored
MODELS_DIR = os.path.join(ROOT_DIR, "models")

# Load the pickled models
lr_model = pickle.load(open(os.path.join(MODELS_DIR, "model_lr.pkl"), "rb"))
svm_model = pickle.load(open(os.path.join(MODELS_DIR, "model_svm.pkl"), "rb"))

# Load the TfidfVectorizer object
vectorizer = pickle.load(open(os.path.join(MODELS_DIR, "tfidf_vectorizer.pkl"), "rb"))

ENCODE_DICT = {
    'not_cyberbullying': 0,
    'gender': 1,
    'religion': 2,
    'other_cyberbullying': 3,
    'age': 4,
    'ethnicity': 5
}

def predict_tweet(text):
    # Preprocess the text
    cleaned_text = cleantext(text)

    # Convert text to features
    features = vectorizer.transform([cleaned_text])

    # Get predictions from all models
    lr_prediction = lr_model.predict(features)[0]
    svm_prediction = svm_model.predict(features)[0]

    # Aggregate predictions
    predictions = [lr_prediction, svm_prediction]
    prediction_counts = Counter(predictions)
    most_common_prediction = prediction_counts.most_common(1)[0][0]

    # Decode the prediction
    prediction_label = list(ENCODE_DICT.keys())[list(ENCODE_DICT.values()).index(most_common_prediction)]

    # Generate detailed classification message
    detailed_message = {
        'not_cyberbullying': "This tweet does not appear to contain any form of cyberbullying.",
        'gender': "This tweet seems to contain content related to gender-based cyberbullying.",
        'religion': "This tweet appears to have content related to religious-based cyberbullying.",
        'other_cyberbullying': "This tweet seems to contain other forms of cyberbullying not specifically categorized.",
        'age': "This tweet appears to contain content related to age-based cyberbullying.",
        'ethnicity': "This tweet seems to contain content related to ethnicity-based cyberbullying."
    }

    return f"{detailed_message[prediction_label]}"

# Example usage
# tweet_text = "HASN'T DONE ANYTHING FOR THE PAST 20 TO 30 YEARS FOR BLACK LIVES WHILE HE WAS IN CONGRESS EXCEPT FILL HIS POCKETS. ONCE THERE WAS A CIVIL RIGHTS HERO, THEN HE WENT TO CONGRESS IN THE DEMOCRAT PARTY AND DID NOTHING BUT LIP WORK. SORRY LEWIS RIP BUT TRUTH BE TOLD"
# prediction = predict_tweet(tweet_text)
# print(prediction)