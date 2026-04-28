import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buzzer />} />
        <Route path="/about" element={<Admin />} />
        <Route path="/contact" element={<Screen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
