import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Tickets, FAQ, Home, Admin, Story, Program } from "./pages";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            exact
            path="/2bb87b93-f62e-4698-95e2-4869a04d0b7a"
            element={<Admin />}
          />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/program" element={<Program />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </Layout>
    </Router>
  );
}
