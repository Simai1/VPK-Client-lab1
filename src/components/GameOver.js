import React from "react";
import { Link } from "react-router-dom";

const GameOver = () => {
    return (
        <div>
            <h1>Игра завершена</h1>
            <p>У вас закончились попытки.</p>
            <Link to="/">Попробовать снова</Link>
        </div>
    );
};

export default GameOver;
