import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${apiUrl}/login`, { username, password })
            .then(response => {
                // Сохраните токен в localStorage или context
                localStorage.setItem("token", response.data.token);
                navigate("/result");
            })
            .catch(() => setError("Ошибка при аутентификации"));
    };

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
