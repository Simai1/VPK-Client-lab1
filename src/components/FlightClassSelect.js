import React from "react";

const FlightClassSelect = ({ selectedClass, onFlightClassChange }) => {
    return (
        <div>
            <label>Выберите класс: </label>
            <select
                value={selectedClass}
                onChange={(e) => onFlightClassChange(e.target.value)}
            >
                <option value="Эконом">Эконом</option>
                <option value="Комфорт">Комфорт</option>
                <option value="Бизнес">Бизнес</option>
                <option value="Первый класс">Первый класс</option>
            </select>
        </div>
    );
};

export default FlightClassSelect;
