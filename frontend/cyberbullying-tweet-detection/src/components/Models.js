import "./Models.css";

const Models = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="heading-section">
                    <h1>Algorithms Used to Build The Model</h1>
                </div>
                <div className="content-section">
                    <div className="card">
                        <div className="card-img-container">
                            <img src="/images/LR.png" alt="Logistic Regression"/>
                        </div>
                        <h4>LOGISTIC REGRESSION</h4>
                        <p>Logistic Regression is one of the fundamental machine learning classifiers. It is a widely used machine learning classifier. Logistic Regression, commonly used for binary classification, can also be extended to multi-class classification scenarios. In the context of this project, Cyberbullying Tweet Detection with six classes, Logistic Regression serves as a versatile algorithm for categorizing tweets into different cyberbullying types.</p>
                        <p>The input features could include parameters such as the presence of certain keywords, linguistic patterns indicative of cyberbullying. The logistic regression model then calculates the probability that the tweet belongs to the cyberbullying class based on these features.</p>
                    </div>
                    <div className="card">
                        <div className="card-img-container">
                            <img src="/images/SVM.png" alt="Support Vector Machine"/>
                        </div>
                        <h4>SUPPORT VECTOR MACHINE</h4>
                        <p>In the realm of machine learning, Support Vector Machines (SVM) stand as a formidable tool for classification and regression tasks. The essence of SVM lies in its ability to find the optimal decision boundary, or hyperplane, that effectively separates data points of different classes.</p>
                        <p>At its core, SVM operates on the principle of maximizing the margin between the hyperplane and the nearest data points from each class. These data points, known as support vectors, dictate the positioning of the hyperplane and influence its ability to generalize to new, unseen data. The primary objective of SVM is to find the hyperplane that best divides the data while minimizing the risk of misclassification.	</p>
                    </div>
                    <div className="card">
                        <div className="card-img-container">
                            <img src="/images/RF.png" alt="Random Forest"/>
                        </div>
                        <h4>RANDOM FOREST</h4>
                        <p>Random Forest, a powerful ensemble learning technique, is well-suited for multi-class classification tasks. This versatile algorithm can effectively analyze various features to categorize tweets into different cyberbullying types.</p>
                        <p>Random Forest builds a forest of decision trees, each trained on different subsets of the dataset. For multi-class classification, the algorithm combines the outputs of individual trees to determine the final class. The algorithm provides insights into feature importance, aiding in understanding the most influential factors driving each class prediction. The aggregation of multiple decision trees in the ensemble helps mitigate overfitting and enhances generalization to new data.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Models;