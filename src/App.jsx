import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Views/HomePage.jsx';
import QuizPage from './Views/QuizPage.jsx';
import Dashboard from './Views/Dashboard.jsx';
import ResultPage from './Views/ResultPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;