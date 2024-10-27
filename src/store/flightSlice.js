import { createSlice } from '@reduxjs/toolkit';

const basePrices = {
    Эконом: 100,
    Комфорт: 150,
    Бизнес: 300,
    'Первый класс': 600,
};

const destinationPrices = {
    'Нью-Йорк': 200,
    Лондон: 400,
    Токио: 500,
    Париж: 350,
};

const calculatePrice = (flightClass, destination, passengers) => {
    const classPrice = basePrices[flightClass];
    const destinationPrice = destinationPrices[destination];
    return (classPrice + destinationPrice) * passengers;
};

const flightSlice = createSlice({
    name: 'flight',
    initialState: {
        flightClass: 'Эконом',
        passengers: 1,
        destination: 'Нью-Йорк',
        price: 0,
    },
    reducers: {
        setFlightClass: (state, action) => {
            state.flightClass = action.payload;
            state.price = calculatePrice(state.flightClass, state.destination, state.passengers);
        },
        setPassengers: (state, action) => {
            state.passengers = action.payload;
            state.price = calculatePrice(state.flightClass, state.destination, state.passengers);
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
            state.price = calculatePrice(state.flightClass, state.destination, state.passengers);
        },
    },
});

export const { setFlightClass, setPassengers, setDestination } = flightSlice.actions;
export default flightSlice.reducer;