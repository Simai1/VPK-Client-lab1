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
                defaultValue="1"
                onChange={(e) => onPassengerCountChange(e.target.value? Number(e.target.value): "")}
            />
        </div>
    );
};

export default PassengerCountSelect;