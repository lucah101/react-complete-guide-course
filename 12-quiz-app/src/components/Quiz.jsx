import { useState } from 'react';
import QUESTIONS from '../questions.js';
import quizIsCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    
    const quizIsComplete = userAnswers.length === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    if (quizIsComplete) {
        return (<div id="summary">
            <h2>Quiz Complete!</h2>
            <img src={quizIsCompleteImg} alt="Quiz Complete" />
        </div>);
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="questions">
                <QuestionTimer 
                    timeout={10000} 
                    onTimeout={() => handleSelectAnswer(null)} 
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>   
        </div> 
    );
}