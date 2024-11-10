import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <h1>Правила игры</h1>
            <p>В этой игре нужно угадывать исполнителей, жанры и названия песен.</p>
            <Link to="/game">
                <button>Старт</button>
            </Link>
        </div>
    );
};

export default Welcome;
