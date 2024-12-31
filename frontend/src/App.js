import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path ="/login" element={<Login />} />
        <Route path="/user" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
