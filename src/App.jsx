import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
