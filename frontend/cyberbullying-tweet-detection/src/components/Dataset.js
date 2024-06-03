import "./Dataset.css";

const Dataset = () => {
    return(
        <div className="container">
            <h1>About the Dataset</h1>
            <div className="row">
                <div className="content">
                    <h2>Dataset</h2>
                    <p>You can find the source of dataset <a href="https://www.kaggle.com/datasets/andrewmvd/cyberbullying-classification" target="_blank" rel="noreferrer">here</a>.</p>
                    <p>Dataset consists of two columns: tweet_text and cyberbullying_type. This dataset contains 47692 tweets and cyberbullying_type is labelled according to the class of cyberbullying: Age, Ethnicity, Gender, Religion, Other type of cyberbullying, Not cyberbullying. The data has been balanced in order to contain ~8000 of each class. As mentioned by the authors in Kaggle, these tweets either describe a bullying event or are the offense themselves, therefore explore it to the point where you feel comfortable.</p>
                </div>
                <div className="image">
                    <img src="/images/sample-dataset.png" alt="Sample Dataset"/>
                </div>
            </div>
            <div className="row reverse">
                <div className="image">
                    <img src="/images/class-distribution.png" alt="Class distribution"/>
                </div>
                <div className="content">
                    <h2>Cyberbullying type classes description</h2>
                    <ul className="classes">
                        <li>Age: This class refers to instances of cyberbullying that revolve around someone's age. It could involve making fun of someone’s age, or using age-related insults to hurt them.</li>
                        <li>Ethnicity: This class refers to tweets that involves bad words.</li>
                        <li>Gender: Involves attacking someone based on their gender.</li>
                        <li>Religion: Cyberbullying that is targeted on a person's religion or beliefs.</li>
                        <li>Other Type of Cyberbullying: This class covers any form of online harassment that doesn't fit the defined categories but still causes harm and distress.</li>
                        <li>Not Cyberbullying: Situations where the content or behavior does not meet the criteria for cyberbullying.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dataset;