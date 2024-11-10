import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
    return (
        <div>
            <h1>Поздравляем, вы выиграли!</h1>
            <Link to="/game">Попробовать ещё раз</Link>
        </div>
    );
};

export default Result;
