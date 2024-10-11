import React, { useState } from "react";
import "./Home.css";

const Home = () => {
    const [text, setText] = useState("");
    const [prediction, setPrediction] = useState("");

    const handlePredict = async () => {
        if (!text.trim()) {
            setPrediction("Text cannot be empty");
            return;
        }

        try {
            const apiUrl = process.env.BACKEND_API_URL || 'https://cyberbullying-tweet-detection.onrender.com/predict';
            const response = await fetch(`${apiUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text })
            });

            if (response.ok) {
                const data = await response.json();
                setPrediction(data.prediction);
            } else {
                setPrediction("Error: Unable to get prediction");
            }
        } catch (error) {
            setPrediction("Backend is currently down. Sorry for Inconvenience. Please try again later.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="content">
                    <p>Social media platforms have ingrained themselves into our lives in today's linked society, providing a forum for connection, expression, and communication. However, this digital environment also presents difficulties, one of which is the increase in cyberbullying, a kind of online harassment and hostility. The growing use of social media has increased the impact of cyberbullying, which now affects people of all ages, genders, and races.</p>
                    <p>The "Cyberbullying Tweet Detection" project looks into the world of machine learning to tackle the essential problem of cyberbullying detection in online communication. This project focuses on the creation and implementation of cutting-edge machine learning models to automatically recognize and categorize tweet content containing cyberbullying.</p>
                </div>
                <div className="image">
                    <img src="./images/cyberbullying.png" alt="Cyberbullying"/>
                </div>
            </div>
            <div className="row">
                <div className="prediction-section">
                    <h2>Try the Cyberbullying detection model</h2>
                    <textarea className="input-textarea" placeholder="Enter text here..." value={text}
                        onChange={(e) => setText(e.target.value)}></textarea>
                    <button className="predict-button" onClick={handlePredict}>Predict</button>
                    <p className="prediction-result">{prediction}</p>
                </div>
            </div>
            <div className="row">
                <p>The machine learning models developed in the "Cyberbullying Tweet Detection" project have achieved an impressive accuracy rate of 83% in effectively identifying and categorizing cyberbullying content in English language tweets. Please note that while the system is highly accurate, it may not detect all instances of cyberbullying.</p>
            </div>
        </div>
    );
};

export default Home;