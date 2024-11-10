import { makeAutoObservable } from "mobx";

class FlightStore {
    flightClass = "Эконом";
    passengers = 1;
    destination = "Нью-Йорк";

    constructor() {
        makeAutoObservable(this); // Преобразуем объект в реактивный
    }

    setFlightClass(flightClass) {
        this.flightClass = flightClass;
    }

    setPassengers(passengers) {
        this.passengers = passengers;
    }

    setDestination(destination) {
        this.destination = destination;
    }

    calculatePrice() {
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

        const classPrice = basePrices[this.flightClass];
        const destinationPrice = destinationPrices[this.destination];

        return (classPrice + destinationPrice) * this.passengers;
    }
}

const flightStore = new FlightStore();
export default flightStore;