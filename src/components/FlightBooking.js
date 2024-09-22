import React, {useState} from "react";
import FlightClassSelect from "./FlightClassSelect";
import PassengerCountSelect from "./PassengerCountSelect";
import DestinationSelect from "./DestinationSelect";

const basePrices = {
    Эконом: 100,
    Комфорт: 150,
    Бизнес: 300,
    "Первый класс": 600,
};

const destinationPrices = {
    "Нью-Йорк": 200,
    Лондон: 400,
    Токио: 500,
    Париж: 350,
};

const calculatePrice = (flightClass, destination, passengers) => {
    const classPrice = basePrices[flightClass];
    const destinationPrice = destinationPrices[destination];
    return (classPrice + destinationPrice) * passengers;
};

const FlightBooking = () => {
    const [flightClass, setFlightClass] = useState("Эконом");
    const [passengers, setPassengers] = useState(1);
    const [destination, setDestination] = useState("Нью-Йорк");

    const handleFlightClassChange = (selectedClass) => {
        setFlightClass(selectedClass);
    };

    const handlePassengerCountChange = (count) => {
        setPassengers(count);
    };

    const handleDestinationChange = (selectedDestination) => {
        setDestination(selectedDestination);
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
            <h3>Цена: ${calculatePrice(flightClass, destination, passengers)}</h3>
            <button>Купить</button>
        </div>
    );
};

export default FlightBooking;
