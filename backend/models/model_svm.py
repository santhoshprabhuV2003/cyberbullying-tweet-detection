import os
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.model_selection import RandomizedSearchCV
import pickle
from backend.utils.preprocess import cleantext

# Load dataset
dataset = pd.read_csv(os.path.join(os.path.dirname(__file__), '..', 'data', 'cyberbullying_tweets.csv'))

# Data preprocessing
dataset.drop_duplicates(subset='tweet_text', keep='first', inplace=True)
ENCODE_DICT = {
    'not_cyberbullying': 0,
    'gender': 1,
    'religion': 2,
    'other_cyberbullying': 3,
    'age': 4,
    'ethnicity': 5
}
dataset['cyberbullying_type'] = dataset.cyberbullying_type.replace(ENCODE_DICT)

# Clean text
dataset['tweet_text'] = dataset['tweet_text'].apply(cleantext)

# Feature extraction
tfidf = TfidfVectorizer(max_features=5000)
X = tfidf.fit_transform(dataset['tweet_text'])
y = dataset['cyberbullying_type']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# SVM model
svm = SVC()

# Hyperparameter tuning using RandomizedSearchCV
param_distributions = {
    'C': [0.1, 1, 10],
    'gamma': [0.1, 0.01],
    'kernel': ['linear', 'rbf']
}

random_search = RandomizedSearchCV(estimator=svm, param_distributions=param_distributions, n_iter=100,
                                   cv=3, verbose=1, random_state=42, n_jobs=-1)
random_search.fit(X_train, y_train)

# Best model from RandomizedSearchCV
tuned_svm_model = random_search.best_estimator_
tuned_svm_model.fit(X_train, y_train)

# Save the model
with open('model_svm.pkl', 'wb') as file:
    pickle.dump(tuned_svm_model, file)