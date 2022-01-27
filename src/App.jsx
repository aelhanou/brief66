import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Chambre, Dashboard,Reservation,ReservationInfo, Login } from "./pages";
import {Navbar} from "./components"
import { PreferencesAuth } from "./pages/preferences";

function App() {

  return (
    <Router>
     {<Navbar/> }
      <Routes>
        <Route exact path="/" element={<Reservation/>} />
        <Route exact path="/chambre" element={<Chambre />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservationinfo" element={<ReservationInfo />} />
        <Route path="/preferences" element={<PreferencesAuth />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
