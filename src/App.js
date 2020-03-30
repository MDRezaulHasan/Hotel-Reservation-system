import React, { Component } from "react";
import Forecast from "./components/Forecast";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HotelDetails from "./components/HotelDetails";
import BookingDetails from "./components/BookingDetails";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Search</h1>
        </header>
        <Router>
          <Route path="/" exact>
            <Forecast />
          </Route>
          <Route path="/hoteldetails/:id">
            <HotelDetails />
          </Route>
          <Route path="/bookingdetails/:id">
            <BookingDetails />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
