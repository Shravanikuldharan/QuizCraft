import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Views/HomePage.jsx';
import QuizPage from './Views/QuizPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}

export default App;