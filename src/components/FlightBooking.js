import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FlightClassSelect from "./FlightClassSelect";
import PassengerCountSelect from "./PassengerCountSelect";
import DestinationSelect from "./DestinationSelect";
import { setFlightClass, setPassengers, setDestination } from "../store/flightSlice";

const FlightBooking = () => {
    const { flightClass, passengers, destination, price } = useSelector((state) => state.flight);
    const dispatch = useDispatch();

    const handleFlightClassChange = (selectedClass) => {
        dispatch(setFlightClass(selectedClass));
    };

    const handlePassengerCountChange = (count) => {
        dispatch(setPassengers(count));
    };

    const handleDestinationChange = (selectedDestination) => {
        dispatch(setDestination(selectedDestination));
    };

    return (
        <div>
            <h1>Бронирование авиабилетов</h1>
            <FlightClassSelect
                selectedClass={flightClass}
                onFlightClassChange={handleFlightClassChange}
            />
            <PassengerCountSelect
                passengers={passengers}
                onPassengerCountChange={handlePassengerCountChange}
            />
            <DestinationSelect
                selectedDestination={destination}
                onDestinationChange={handleDestinationChange}
            />

            <h2>Ваш билет:</h2>
            <p>Класс: {flightClass}</p>
            <p>Пассажиры: {passengers}</p>
            <p>Пункт назначения: {destination}</p>
            <h3>Цена: ${price}</h3>
            <button>Купить</button>
        </div>
    );
};

export default FlightBooking;
