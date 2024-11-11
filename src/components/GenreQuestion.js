import React, { useState, useEffect } from "react";

const GenreQuestion = ({ question, onAnswer }) => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    // Очистка selectedAnswers при изменении вопроса
    useEffect(() => {
        setSelectedAnswers([]);
    }, [question]);

    const toggleAnswer = (answer) => {
        if (selectedAnswers.includes(answer)) {
            setSelectedAnswers(selectedAnswers.filter((a) => a !== answer));
        } else {
            setSelectedAnswers([...selectedAnswers, answer]);
        }
    };

    return (
        <div className="genre-question">
            <h2>Выберите все композиции жанра {question.genre}</h2>
            {question.answers.map((answer, index) => (
                <div key={index} className="genre-option">
                    <audio controls src={answer.src}></audio>
                    <input
                        type="checkbox"
                        checked={selectedAnswers.includes(answer)}
                        onChange={() => toggleAnswer(answer)}
                    />
                </div>
            ))}
            <button onClick={() => onAnswer(selectedAnswers)}>Ответить</button>
        </div>
    );
};

export default GenreQuestion;
