import React from 'react';
import './Quiz.css';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
const questionsData = [
    {
        title: "What's your hair type or texture?",
        answers: ["Straight", "Wavy", "Curly", "Coily"]
    },
    {
        title: "Hello?",
        answers: ["Straight", "Wavy", "Curly", "Coily"]
    },
    {
        title: "What's your hair type or texture?",
        answers: ["Straight", "Wavy", "Curly", "Coily"]
    },
    {
        title: "What's your hair type or texture?",
        answers: ["Straight", "Wavy", "Curly", "Coily"]
    },
    {
        title: "What's your hair type or texture?",
        answers: ["Straight", "Wavy", "Curly", "Coily"]
    }
]
function QuizComponent() {

    const { id } = useParams();
    const idNumber = Number(id);
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
                        <button key={index}>{option}</button>
                    ))}
                </div>
            </div><div>

                {idNumber > 1 && (
                    <Link to={`/questions/${idNumber - 1}`}>Prev</Link>
                )}


                {idNumber < 5 && (
                    <Link to={`/questions/${idNumber + 1}`}>Next</Link>
                )}
            </div>
        </div>
    );
}

export default QuizComponent;
