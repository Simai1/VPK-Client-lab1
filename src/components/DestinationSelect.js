import React from "react";

const DestinationSelect = ({ selectedDestination, onDestinationChange }) => {
    return (
        <div>
            <label>Выберите пункт назначения: </label>
            <select
                value={selectedDestination}
                onChange={(e) => onDestinationChange(e.target.value)}
            >
                <option value="Нью-Йорк">Нью-Йорк</option>
                <option value="Лондон">Лондон</option>
                <option value="Токио">Токио</option>
                <option value="Париж">Париж</option>
            </select>
        </div>
    );
};

export default DestinationSelect;
