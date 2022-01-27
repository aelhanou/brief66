import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Chambre, Dashboard,Reservation,ReservationInfo } from "./pages";
import {Navbar} from "./components"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Reservation/>} />
        <Route exact path="/chambre" element={<Chambre />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservationinfo" element={<ReservationInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
