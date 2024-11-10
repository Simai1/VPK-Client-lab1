import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Game from "./components/Game";
import Login from "./components/Login";
import Result from "./components/Result";
import GameOver from "./components/GameOver";
import NotFound from "./components/NotFound";
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/game" element={<Game />} />
                <Route path="/login" element={<Login />} />
                <Route path="/result" element={<Result />} />
                <Route path="/lose" element={<GameOver />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
