import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import QuizComponent from './Components/Pages/Quiz';

import Home from './Components/Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="questions/:id" element={<QuizComponent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
