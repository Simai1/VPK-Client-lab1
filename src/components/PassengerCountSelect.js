import React from "react";

const PassengerCountSelect = ({ passengers, onPassengerCountChange }) => {
    return (
        <div>
            <label>Выберите число пассажиров: </label>
            <input
                type="number"
                value={passengers}
                min="1"
                max="10"
                onChange={(e) => onPassengerCountChange(Number(e.target.value))}
            />
        </div>
    );
};

export default PassengerCountSelect;
