import React, { useState } from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const questionsData = [
    {
        title: "What's your hair type or texture?",
        answers: ["Straight", "Curly", "Wavy", "Fine"]
    },
    {
        title: "How often do you wash your hair?",
        answers: ["Daily", "Every other day", "Twice a week", "Once a week", "Every two weeks"]
    },
    {
        title: "What benefit do you look for in your hair products?",
        answers: ["Anti-breakage", "Hydration", "Soothing dry scalp", "Repairs appearance of damaged hair", "Volume", "Curl and coil enhancing"]
    },
    {
        title: "Is there anything troubling you about your hair?",
        answers: ["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"]
    },
    {
        title: "What is your natural hair color(s) today?",
        answers: ["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"]
    }
]

function QuizComponent() {
    const { id } = useParams();
    const idNumber = Number(id);
    const [updateCount, setUpdateCount] = useState(0);

    console.log(id);

    if (idNumber >= 6 || idNumber < 1) {
        return "Invalid ID";
    }

    return (
        <div className="quiz-container">
            <div className="quiz-container">
                <h2 className="quiz-title">{questionsData[id - 1].title}</h2>
                <div className="answer-options">
                    {questionsData[id - 1].answers.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                localStorage.setItem(`q${id}`, option);
                                setUpdateCount(updateCount + 1);
                            }}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                {idNumber > 1 && (
                    <Link to={`/questions/${idNumber - 1}`}>Prev</Link>
                )}
                {(idNumber <= 4 && localStorage.getItem(`q${id}`)) && (
                    <Link to={`/questions/${idNumber + 1}`}>Next</Link>
                )}
                {(idNumber === 5 && localStorage.getItem(`q${id}`)) && (
                    <Link to={`/products`}>Discover Your Results</Link>
                )}
            </div>
            <p>{id}/5</p>
        </div>
    );
}

export default QuizComponent;
