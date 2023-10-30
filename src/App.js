import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Code from './code';
import Order from "./order";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Code />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;