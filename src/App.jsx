import React from "react";

import Home from "./pages/Home";
import Admin from './pages/Admin';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path="/2bb87b93-f62e-4698-95e2-4869a04d0b7a" element={<Admin />}/>
      </Routes>
    </Router>
  );
}