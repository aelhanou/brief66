import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Chambre, Dashboard,Reservation } from "./pages";
import {Navbar} from "./components"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Reservation/>} />
        <Route exact path="/chambre" element={<Chambre />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
