import React from "react";
import './App.css';
import FlightBooking from "./components/FlightBooking";
import { observer } from "mobx-react";

const App = observer(() => {
    return (
        <div className="App">
            <FlightBooking/>
        </div>
    );
});

export default App;