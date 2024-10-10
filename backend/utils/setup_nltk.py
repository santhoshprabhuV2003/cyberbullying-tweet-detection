import nltk

def download_nltk_resources():
    # Download wordnet
    nltk.download('wordnet', quiet=True)
    
    # Download stopwords
    nltk.download('stopwords', quiet=True)

if __name__ == "__main__":
    download_nltk_resources()