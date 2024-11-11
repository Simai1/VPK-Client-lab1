import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GenreQuestion from "./GenreQuestion";
import ArtistQuestion from "./ArtistQuestion";
import axios from "axios";
import { apiUrl } from "../utils/api";

const Game = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`${apiUrl}/questions`)
            .then(response => setQuestions(response.data))
            .catch(() => setError("Ошибка загрузки данных"));
    }, []);

    const handleGenreAnswer = (selectedGenres) => {
        const correctGenre = questions[currentQuestionIndex].genre;

        const isCorrect = selectedGenres.every(answer => answer.genre === correctGenre);

        if (isCorrect) {
            goToNextQuestion();
        } else {
            updateAttempts();
        }
    };

    const handleArtistAnswer = (selectedArtist) => {
        const correctArtist = questions[currentQuestionIndex].song.artist;

        if (selectedArtist === correctArtist) {
            goToNextQuestion();
        } else {
            updateAttempts();
        }
    };

    const updateAttempts = () => {
        const newAttempts = attemptsLeft - 1;
        setAttemptsLeft(newAttempts);

        if (newAttempts <= 0) {
            navigate("/lose");
        }
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);

        } else {
            navigate("/result");
        }
    };

    const renderQuestion = () => {
        const question = questions[currentQuestionIndex];

        if (question.type === "genre") {
            return (
                <GenreQuestion
                    question={question}
                    onAnswer={handleGenreAnswer}
                />
            );
        } else if (question.type === "artist") {
            return (
                <ArtistQuestion
                    question={question}
                    onAnswer={handleArtistAnswer}
                />
            );
        }

        return null;
    };

    return (
        <div className="container">
            <div className="game-header">
                <Link to="/">Вернуться на главную</Link>
                <p className="game-attempts">Осталось попыток: {attemptsLeft}</p>
            </div>
            <h1>Игра</h1>
            {error && <p>{error}</p>}
            {questions.length > 0 ? renderQuestion() : <p>Загрузка...</p>}
        </div>
    );
};

export default Game;
