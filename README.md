# Cyberbullying Tweet Detection

The "Cyberbullying Tweet Detection" project looks into the world of machine learning to tackle the essential problem of cyberbullying detection in online communication. This project focuses on the creation and implementation of cutting-edge machine learning models to automatically recognize and categorize tweet content containing cyberbullying.

## Backend

The backend of the application is built using Flask, a lightweight WSGI web application framework in Python. It exposes endpoints to receive text inputs, process them through pre-trained machine learning models, and return predictions on whether the input text contains cyberbullying content.

### Steps to Clone and Run the Backend

1. Clone the Repository

    ```bash
    git clone https://github.com/santhoshprabhuV2003/cyberbullying-tweet-detection.git
    ```

2. Set Up Virtual Environment

    ```bash
    python -m venv venv
    venv/Scripts/activate  # On Windows
    source venv/bin/activate  # On macOS/Linux
    ```

3. Install Dependencies

    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask App

    ```bash
    flask run
    ```

The Flask app will start running locally at http://localhost:5000. You can access the /predict endpoint by a post request with text as body of the request.

## Frontend

The frontend provides a user-friendly interface for interacting with the cyberbullying detection system. It is built using React and includes three main pages: Home, Models, and Dataset.

### Pages

1. Home: Provides an overview of the project, explains how users can input text to predict cyberbullying, and displays the results.

2. Models: Discusses the machine learning algorithms used in building the models, including Logistic Regression (LR), Support Vector Machine (SVM), and Random Forest (RF).

3. Dataset: Provides insights into the dataset used for training the models, including its sources and composition.

### Steps to Clone and Run the Frontend

1. Clone the Repository

    ```bash
    git clone https://github.com/santhoshprabhuV2003/cyberbullying-tweet-detection.git
    cd frontend/cyberbullying-tweet-detection
    ```

2. Install Dependencies

    ```bash
    npm install
    ```

3. Run the React App

    ```bash
    npm start
    ```

The React app will start running locally at http://localhost:3000.

## Application images

![homepage](https://github.com/santhoshprabhuV2003/cyberbullying-tweet-detection/assets/138225962/e66bf46f-189b-41e2-990f-4404fbf272fb)

![modelspage](https://github.com/santhoshprabhuV2003/cyberbullying-tweet-detection/assets/138225962/2763eaae-ab78-43ac-b9b1-81a2954dc1c5)

![dataset](https://github.com/santhoshprabhuV2003/cyberbullying-tweet-detection/assets/138225962/566ee214-30db-4cac-b20c-7338d8a8f23f)

## Application hosted in GitHub pages

https://santhoshprabhuv2003.github.io/cyberbullying-tweet-detection/

## NOTE

The machine learning models developed in the "Cyberbullying Tweet Detection" project have achieved an impressive accuracy rate of 83% in effectively identifying and categorizing cyberbullying content in English language tweets. Please note that while the system is highly accurate, it may not detect all instances of cyberbullying.
