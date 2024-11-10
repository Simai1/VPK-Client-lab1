import React from "react";

const ArtistQuestion = ({ question, onAnswer }) => {
    return (
        <div className="artist-question">
            <h2>Кто исполнитель этой песни?</h2>
            <audio controls src={question.song.src}></audio>
            {question.answers.map((answer, index) => (
                <div key={index} className="artist-option">
                    <img src={answer.picture} alt={answer.artist}/>
                    <button onClick={() => onAnswer(answer.artist)}>{answer.artist}</button>
                </div>
            ))}
        </div>
    );
};

export default ArtistQuestion;
