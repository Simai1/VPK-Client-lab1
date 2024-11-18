import React from "react";
import FlightClassSelect from "./FlightClassSelect";
import PassengerCountSelect from "./PassengerCountSelect";
import DestinationSelect from "./DestinationSelect";
import flightStore from "../store/store";
import {observer} from "mobx-react";

const FlightBooking = () => {
    return (
        <div>
            <h1>Бронирование авиабилетов</h1>
            <FlightClassSelect
                selectedClass={flightStore.flightClass}
                onFlightClassChange={flightStore.setFlightClass.bind(flightStore)}
            />
            <PassengerCountSelect
                passengers={flightStore.passengers}
                onPassengerCountChange={flightStore.setPassengers.bind(flightStore)}
            />
            <DestinationSelect
                selectedDestination={flightStore.destination}
                onDestinationChange={flightStore.setDestination.bind(flightStore)}
            />

            <h2>Ваш билет:</h2>
            <p>Класс: {flightStore.flightClass}</p>
            <p>Пассажиры: {flightStore.passengers}</p>
            <p>Пункт назначения: {flightStore.destination}</p>
            <h3>Цена: ${flightStore.calculatePrice()}</h3>
            <button>Купить</button>
        </div>
    );
};

export default observer(FlightBooking);
